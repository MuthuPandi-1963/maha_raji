import axios from 'axios'
import { useEffect, useState } from 'react';
export default function ShowTask() {
    const [task,setTask] = useState([])
    useEffect(()=>{
        GetTask()
    },[])
    async function GetTask() {
        const response = await axios.get("http://localhost:3000/task")
        console.log(response?.data);
        setTask(response?.data?.data)
        
    }
    

  return (
    <>
    <h1>Tasks</h1>
    <div className="">
        {task.map((val,id)=>(
            <div className="" key={id}>
                <p>{val.name}</p>
                <p>{val.description}</p>
            </div>
        ))}
    </div>
    </>
    
  )
}
