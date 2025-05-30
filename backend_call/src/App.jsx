import axios from "axios";
import APIData from "./APIData";
import { useEffect, useState } from "react";

export default function App() {
  const [apiData, setApiData] = useState([])
  const  [count,setCount] = useState(0)
  
  // useEffect(()=>{
  //   fetchData()
  // },[])

  useEffect(()=>{
    fetchData()
    console.log("button clicked");
    
  },[count])

  const fetchData = async()=>{
    const response = await axios.get("https://dummyjson.com/posts")
    console.log(response.data.posts);
    const datas = response.data.posts
    console.log(datas);
    
    setApiData(()=>datas.filter(val=>val.id <=count +1 ))
  }
  // fetchData()
  console.log(count);
  
  return (
    <>
    <button onClick={()=>setCount(prev=>prev+1)}>Click</button>
    {
      apiData.map((val,id)=>(
        <>
        <p>{val.title}   {val.views}</p>
        </>
      ))
    }
    <APIData/>
    </>
  )
}
