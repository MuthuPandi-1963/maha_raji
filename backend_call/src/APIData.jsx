import React, { useState } from 'react'
import axios from 'axios'
export default function APIData() {
  const [value, setValue] = useState([])
    async function HandleClick(){
        const response =await  axios.get("https://dummyjson.com/products")
        // .then(res=>res.data)
        // .catch(err=>err.message)
        // console.log(response.data.products); 
        setValue(response.data.products)
        
    }
    
  return (
    <>
    <button onClick={HandleClick}>Get Data </button>
    {
      value.map((val,id)=>(
        <div className="" key={id}>
          <h1>{val.title}</h1>
          <p>{val.category}</p>
          <img src={val.images[2]} alt="" />
        </div>
      ))
    }
    </>
  )
}
