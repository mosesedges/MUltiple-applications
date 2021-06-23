import React from 'react'
import {useForm} from 'react-hook-form'

const FormHook = () => {

  const submit = (data, e) =>{
    e.preventDefault()
    console.log(data)
  }

  const {register, handelSubmit, error} = useForm()
  
  return (
    <form className="container" onSubmit={handelSubmit}>

    <input className = "name" ref={register({required:true})}
    type="text" 
    id='userName' 
    name='userName'
    placeholder='username'
    max='5'
    />
    


    <input className = "email"
    type="email" 
    id='email' 
    name='email'
    placeholder='email'
    minLength='6'
    required
    />

    <button>sumbit</button>

    </form>
  )
}

export default FormHook
