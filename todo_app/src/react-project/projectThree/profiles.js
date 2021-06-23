import React,{useState} from 'react';
import styled from 'styled-components';
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa';
import Keepers from './data';

// styled components for the jsx below.

const Div = styled.div`
width : 80%;
height: 40%;
margin: 28px auto;
`
const Logo = styled.img`
position:absolute;
height:50px;
width:80px;
left:220px;
top:50px;
`
const Photo = styled.img`
margin:10px auto;
position :absolute;
top:-10px;
right:50px;
`
const P = styled.p`
padding:0 0 0 10px;
word-spacing:40px;
color:grey;
`

const BtnRight = styled.button`
position:relative;
width:60px;
height:40px;
border:none;
background:white;
color:#dd06dd;
margin:2px -5px;
left:170px;
&:hover{
  color:#6e066e;
  transform:scale(1.1);
 

}
&:focus{
  outline:none;
}
`



const Btn = styled.button`
position:relative;
width:80px;
height:35px;
border:none;

background:#dd06dd;
color:white;
margin:10px;
left:170px;
border-radius:20px;
&:hover{
  background:#6e066e;
  transform:scale(1.1);
  box-shadow:1px 1px 20px rgba(0,0,0,0.2);
}
&:focus{
  outline:none;
}
`








const Profiles = () => {

  const [index, setIndex] = useState(0);
  const{flagImg, number,name,image, position, nationality, appearance, cleanSheet} = Keepers[index]

// the checknumber function evalutes the index of the array to avoid it from exceeding the length of the data (keepers).when it reaches the last it brings it back to the first.  

  const checkNumber = (number) => {
    if(number > Keepers.length -1 ){
      return (0)
    }

    if(number < 0 ){
      return (Keepers.length-1)
    }
    return number
  } 

  const handleClickNext = () => {
    setIndex(checkNumber(index+1))
  }

  const handleClickPrev = () => {
    setIndex(checkNumber(index -1) )
      
      if(index > Keepers.length-1 ){
        return 0
        
      }
  
    
  }

  // handleClickRandom function creats a random number  within the length of the data(keepers), it also conditioned the randomNumber not to repeat an index concurrently.

  const handleClickRandom = () => {
let randomNumber = Math.floor(Math.random()*Keepers.length)
if (randomNumber === index){
  randomNumber = index + 1;
  console.log(randomNumber)
}
setIndex(checkNumber(randomNumber)) 
  
  }

  return (
    <Div>
    <main>
    <Logo src={flagImg} height='100px' alt='Club logo'/>
    <Photo src={image}  alt={name}/>
    <h3>{number} <span>{name}</span></h3>
    <hr/>
    <p>{position}</p>
    <hr/>
    <P>Nationality {nationality}</P>
    <hr/>
    <P>Appearance {appearance}</P>
    <hr/>
    <P>Cleansheet {cleanSheet}</P>
    <hr/>
    <div>
    <BtnRight onClick={()=>handleClickPrev()}><FaChevronCircleLeft size='35px'/></BtnRight>

    <BtnRight onClick={()=>handleClickNext()}><FaChevronCircleRight size='35px'/></BtnRight>
    </div>
    </main>

    <Btn onClick={()=>handleClickRandom()}>Random</Btn>

    </Div>

  )
}

export default Profiles
