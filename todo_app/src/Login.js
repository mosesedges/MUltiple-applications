import React,{useState} from 'react'
import SignUp from './SignUp'
import './App.css';


const Login = () => {

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
      <h1 className = "title">Belle full!</h1>
      <h2 className = "title">Welcome Back!</h2>
      <p className = "title" >Please sign in to place an order </p>
    </div>

      <form onSubmit={handleSubmit} className = "form">
      
      <input className = "name"
      type="text"
      name="login"
      id="password"
      placeholder="Enter Username"
      minLength="5"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />

      <input className = "email"
      type="password"
      name="login"
      id="login"
      placeholder="Enter password"
      minLength="6"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />

     
      <button>Login</button>
      

      <h5>Forgot your Password?</h5>
      </form>
      
    </div>
  )
}

export default Login
