// import React from 'react'
// import { useState } from 'react'
// import { useRef } from 'react'

// export default function Form() {
//     // const [name, setName] = useState("")
//     // const [des, setDes] = useState("")

//     const nameRef = useRef()
//     const desRef = useRef()
//     function handleClick() {
//         console.log(nameRef.current.value);
//         console.log(desRef.current.value);
        
        
        
//     }
//   return (
//     <>
//     <div className="">
//         <label htmlFor="">Name</label>
//         <input type="text" name="" id="" ref={nameRef}  placeholder='enter a task name'  />
//     </div>
//     <div className="">
//         <label htmlFor="">Description</label>
//         <input type="text" ref={desRef} name="" id="" placeholder='enter a task description' />
//     </div>
//     <button onClick={handleClick}>Add task</button>
//     </>
//   )
// }


import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function Form({setLoad}) {
    
    async function handleClick(e) {
        e.preventDefault()
        const data = {}
        const formData = new FormData(e.target) 
        for (const element of formData.entries()) {
            data[element[0]] = element[1];
            
        }
        console.log(data);

        const res = await axios.post("http://localhost:3000/task",data)
        console.log(res);

        if(res.data.success){
            setLoad(prev=>!prev)
        }
        
    }
  return (
    <>
    <form onSubmit={handleClick}>

    <div className="">
        <label htmlFor="">Name</label>
        <input type="text" name="name" id=""  placeholder='enter a task name'  />
    </div>
    <div className="">
        <label htmlFor="">Description</label>
        <input type="text" name="description" id="" placeholder='enter a task description' />
    </div>
    <button type='submit' >Add task</button>
    </form>
    </>
  )
}
