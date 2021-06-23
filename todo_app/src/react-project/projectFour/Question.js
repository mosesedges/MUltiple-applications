import React,{useState} from 'react';
import styled from 'styled-components';
import data from './data';
import SingleQuestion from './SingleQuestion'

const Div = styled.div`
box-sizing:border-box;
margin:0;
padding:0;
color:whitesmoke;
background-color:black;
height:100vh;
`
const H1 = styled.h2`
font-family:sans-serif;
margin:0 10px;
padding:50px 30px 20px 30px;
font-size:28px;
text-align:center;
@media(min-width:768px){
  font-size:40px;
}
`

const Btn = styled.button`
position: absolute;
left:130px;
background:red;
margin:20px;
padding:5px 20px;
width:auto;
height:50px;
color:white;
font-size:20px;
border-radius:5px;
outline:none;
font-family:sans-serif;

`

const Question = () => {

  const [questions, setQuestions] = useState(data)

  return (
    <Div>
    <div>
    <H1>Frequently Asked Questions</H1>

  {questions.map((item)=>{
    return <SingleQuestion key={item.id} {...item} /> 
    
  })}

  
    </div>

     <Btn>Restart Your Membership</Btn>
    </Div>
  )
}

export default Question
