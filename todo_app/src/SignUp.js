import React, {useState} from 'react'


const SignUp = () => {

  const [person, setPerson]= useState({userName:'', password:'', password2: '', email:''})
  const [newUsers, setNewUsers]= useState([])
  const [isErrors, setIsErrors]= useState({})
  


const handleChange = (e) => {
 const name = e.target.name
 const value = e.target.value 

  setPerson({...person, [name]:value}) 
}

const HandleSubmit = (e) => {
  e.preventDefault()

  if(person.userName && person.password && person.password2 && person.email){

    const guest = {...person, time:new Date().toLocaleString()}

    setNewUsers({...newUsers, guest})


   

    console.log(newUsers)

  }
setPerson({userName:'', password:'', password2:'', email:''})
}





  
  return (
    <div className="container">

    <div>
      <h1 className = "title">Belle full!</h1>
      <p className = "title">The best of continental and intercontinental dishes </p>
      <h2 className = "title">Sign Up </h2>
      
    </div>

    <form onSubmit={ HandleSubmit} className = "form">

    <input className = "name"
    type="text" 
    id='userName' 
    name='userName'
    placeholder='username'
    max='5'
    // required
    value= {person.userName}
    onChange= {handleChange}/>


    <input className = "email"
    type="password" 
    id='password' 
    name='password'
    placeholder='password'
    minLength='6'
    required
    value= {person.password}
    onChange= {handleChange}/>

    <input className = "email"
    type="password" 
    id='password2' 
    name='password2'
    placeholder='retype password'
    minLength='6'
    required
    value= {person.password2}
    onChange= {handleChange}/>
  

    <input className = "email"
    type="email" 
    id='email' 
    name='email'
    placeholder='email'
    min='10'
    required
    value= {person.email}
    onChange= {handleChange}/>
   
  

    <button>Sign up</button>
    
    </form>
    </div>
  )
}

export default SignUp
