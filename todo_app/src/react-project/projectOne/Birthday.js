import React,{useState} from 'react'
import {info} from './List'

const Birthday = () => {

  const [people, setPeople] = useState(info);

  const divStyle = {
    display:'',
    alignItems:'center',
    justifyItems:'center',
    margin:'20px auto',

    height:'auto',
    width:'30%',
    backgroundColor:'pink',
    color:'gray',

  }

  const imageStyle = {
    display:'flex',
    margin:'2px 10px 5px 40px',
    padding:'22px 1px 1px 9px',
    height:120,
    width:120,
    borderRadius:'50%',
    // border:'4px outset skyblue',
    backgroundColor:'pink'
  }

   const nameStyle = {
    display:'InlineFlex',
    margin:'2px 10px 5px 40px',
    color:'beige',
    textShadow:'2px 1px 1px gray',
    fontSize:'20px',
    
  }


  const handleClick = () =>{
    setPeople([])
  }

  return (
    <div  style={divStyle}>
      <h1>{people.length} Birthdays Today </h1>
        {people.map((item)=>{
        return(
          <div>
          <img src={item.image} alt={item.Name} style={imageStyle}/> 
          <h2 style={nameStyle}>{item.Name}</h2>
          <h3 style={nameStyle}>{item.Age}years</h3>
          </div>
        )})}
    <button onClick={handleClick}>Clear All</button>
    </div>
  )
}

export default Birthday
