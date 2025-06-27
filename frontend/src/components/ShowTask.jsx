import axios from 'axios'
import { useEffect, useState } from 'react';
import {MdDelete, MdEdit} from 'react-icons/md'
import Form from './Form';
import UpdateForm from './UpdateForm';
export default function ShowTask({load,setLoad}) {
    const [task,setTask] = useState([])
    useEffect(()=>{
        GetTask()
    },[load])
    const [taskId,setTaskId] = useState("");
    async function GetTask() {
        const response = await axios.get("http://localhost:3000/task")
        console.log(response?.data);
        setTask(response?.data?.data)
        
    }
    const handleDelete = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/task/${id}`)
        console.log(res);
        setLoad(prev=>!prev)
        
    }

  return (
    <>
    <h1>Tasks</h1>
    <div className="border-2 border-black grid gap-2 justify-start justify-items-center w-[60%] mx-auto">
        {task.map((val,id)=>(
            <>
            {taskId == val._id ? <UpdateForm setTaskId={setTaskId} id={val._id} name={val.name} description={val.description} setLoad={setLoad}/> :
            <div className="flex gap-x-3  px-2 mx-auto justify-center w-fit" key={id}>
                {/* <p>{val._id}</p> */}
                <p className='w-20 text-center'>{val.name}</p>
                <p className='w-40 text-center'>{val.description}</p>
                <button onClick={()=>setTaskId(val._id)} className='hover:text-blue-500 text-3xl text-blue-800  cursor-pointer'><MdEdit /></button>
                <button onClick={()=>handleDelete(val._id)}  className='hover:text-red-500 text-3xl text-red-700 cursor-pointer'><MdDelete /></button>
            </div>
            }
            </>
        ))}
    </div>
    </>
    
  )
}
