import axios from 'axios'
import { useEffect, useState } from 'react';
export default function ShowTask({load}) {
    const [task,setTask] = useState([])
    useEffect(()=>{
        GetTask()
    },[load])
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
            <div className="flex gap-x-3 border-2 border-black px-2 mx-auto justify-center w-fit" key={id}>
                <p className='border-1'>{val.name}</p>
                <p>{val.description}</p>
            </div>
        ))}
    </div>
    </>
    
  )
}
