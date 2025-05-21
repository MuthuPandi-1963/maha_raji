import axios from "axios";
import APIData from "./APIData";
import { useEffect, useState } from "react";

export default function App() {
  const [apiData, setApiData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    const response = await axios.get("https://dummyjson.com/posts")
    console.log(response.data.posts);
    setApiData(response.data.posts)
  }
  // fetchData()

  return (
    <>
    {
      apiData.map((val,id)=>(
        <>
        <p>{val.views}</p>
        </>
      ))
    }
    <APIData/>
    </>
  )
}
