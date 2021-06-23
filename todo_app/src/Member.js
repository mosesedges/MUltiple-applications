import React,{useState} from 'react'

const Member = () => {

  

  // const memberInfo = [
  //   {
  //     Name:'Kevin Ejele',
  //     Age: 31,
  //     Location:'Abuja',
  //     Status:'Single',
  //     Active: true

  //   },

  //   {
  //     Name:'Justice Ejel',
  //     Age: 25,
  //     Location:'Debrecen',
  //     Status:'Single',
  //     Active: false

  //   },

  //   {
  //     Name:'Omoye OKoh',
  //     Age: 36,
  //     Location:'London',
  //     Status:'Married',
  //     Active: true

  //   }
  // ]

  // return (
  //   <div data-testid='member'>
  //     {memberInfo}
  //   </div>
  // )

 const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();

  if(userName && password){
  // setUserName(userName)
  // setPassword(password)

  const newInfo = { userName, password}

  setUsers(prev => [...prev, newInfo]) 
       

  console.log(users)
  setUserName('')
  setPassword('')
  } 

}


  return (
    <div className="container">

    <div >
      <h1 className = "title" data-testid= "heading1">Belle full!</h1>
      <h2 className = "title" data-testid= "heading2">Welcome Back!</h2>
      <p className = "title"  data-testid= "ptag">Please sign in to place an order </p>
    </div>

      <form onSubmit={handleSubmit} className = "form">
      
      <input className = "name"
      data-testid= "name"
      type="text"
      name="login"
      id="password"
      placeholder="Enter Username"
      minLength="5"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />

      <input className = "email"
      data-testid= "email"
      type="password"
      name="login"
      id="login"
      placeholder="Enter password"
      minLength="6"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />

     
      <button data-testid= "login">Login</button>
      

      <h5>Forgot your Password?</h5>
      </form>
      
    </div>
  )




}

export default Member
