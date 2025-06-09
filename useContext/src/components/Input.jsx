import React from 'react'

export default function Input({name,id,type,placeholder,...props}) {
  return (
    <div className="flex items-center ">
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id} name={id}  {...props} placeholder={placeholder} className='border  rounded-sm pl-2 ml-2'  />
    </div>
  )
}
