import React, {useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'


const Welcome = () => {

 const [isLogin, setIsLogin] = useState(true);
  


  return (
    <div className = "btn-container">
    {isLogin? <Login/>:<SignUp/>}
    {isLogin && <button  className="btn"  onClick={() => setIsLogin(false)}>Sign up</button>}

    {!isLogin && <button   className="btn" onClick={() => setIsLogin(true)}>Login</button> }
    

    
  
      
    </div>
  )
}

export default Welcome
