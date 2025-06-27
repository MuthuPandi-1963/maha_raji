import axios from 'axios'
import React, { useRef } from 'react'

export default function UpdateForm({id,name,description,setTaskId,setLoad}) {
    const nameRef = useRef()
    const desRef = useRef()
    const handleSave = async()=>{
        
        const data = {
            [nameRef.current.name] : nameRef.current.value ,
        [desRef.current.name] : desRef.current.value , 
     }
     console.log(data);
     
        const res = await axios.put(`http://localhost:3000/task/${id}`,data)
        console.log(res);
        if(res.data.success){
            setTaskId("")
            setLoad(prev=>!prev)
        }   
    }
    const handleCancel = ()=>{
        setTaskId("")
    }
  return (
    <div>
        <input type="text" ref={nameRef} name="name" id="" placeholder='enter name' defaultValue={name} />
        <input type="text"  ref={desRef} name="description" id="" placeholder='enter des' defaultValue={description} />
        <button onClick={handleSave}>save</button>
        <button onClick={handleCancel}>cancel</button>
    </div>
  )
}
