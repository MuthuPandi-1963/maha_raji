import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function Navbar() {
    const {authDispatch} = useContext(AuthContext)
    const handleLogin = ()=>authDispatch({type:"login"})
    const handleRegister = ()=>authDispatch({type:"register"})

  return (
    <div className="flex justify-between items-center px-4 gap-x-4 py-3 bg-gray-200">
        <p className='text-3xl font-bold'>Ecommerce</p>
        <ul className='flex justify-center gap-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Settings</li>
        </ul>
        <div className="flex justify-center gap-x-4">
            <button onClick={handleLogin} className='py-2 px-6 bg-blue-700 cursor-pointer  text-white rounded-xl'>Login</button>
            <button onClick={handleRegister} className='py-2 px-6 bg-white cursor-pointer ring-blue-700 rounded-xl ring-1'>Signup</button>
        </div>
    </div>
  )
}
