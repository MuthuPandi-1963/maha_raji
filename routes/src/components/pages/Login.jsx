import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navi = useNavigate()
  
  const handleLogin = ()=>{
    navi("/home")
  }
  return (
    <div>
      
      <label htmlFor="tem">name</label>
      <input type="text" placeholder='Enter a name' id='tem'/>
      <br />
      <label htmlFor="">email</label>
      <input type="text" placeholder='Enter a name'/>
      <br/>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check">Accept terms and condirtion</label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login    