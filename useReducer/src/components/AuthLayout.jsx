import React, { useContext } from 'react'
import {IoCloseCircle} from 'react-icons/io5'
import { AuthContext } from './AuthContext'
import Login from './Login'
import Register from './Register'
export default function AuthLayout() {
    const {authState ,authDispatch} = useContext(AuthContext)
    const handleClose = ()=>authDispatch({type:"close"})
  return (
    <dialog open={authState.isActive} className='w-96 h-96 shadow-xl shadow-blue-500 rounded-xl mx-auto my-20'>
        <button className='float-right relative' onClick={handleClose}>
            <IoCloseCircle className='text-red-700 text-3xl absolute -top-2 -right-2' />
        </button>
        {authState.name === "login" && <Login/>}
        {authState.name === "register" && <Register/> }

    </dialog>
  )
}
