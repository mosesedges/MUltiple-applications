import React,{useState} from 'react'
import styled from 'styled-components';
import Btn from './elements/Button'
import Div from './elements/header'
import {AiOutlineClose, AiOutlinePlus}from 'react-icons/ai'



const Qts = styled.p`
margin:22px 10px;
font-size:20px;
display:inline-block;
font-family:sans-serif;
@media(min-width:768px){
  font-size:28px;
  padding:5px;
  
}
`

const SingleQuestion = ({question, answer}) => {

  const[showanswer, setShowAnswer] = useState(false)

  return (
    <Div>
      <header>
     <Qts>{question}</Qts> 
     <Btn onClick={()=>setShowAnswer(!showanswer)}>{showanswer?<AiOutlineClose size='40px' color='white'/>:<AiOutlinePlus size='40px' color='white'/>}</Btn>
      </header>
      {showanswer && answer}

    </Div>
  )
}

export default SingleQuestion
