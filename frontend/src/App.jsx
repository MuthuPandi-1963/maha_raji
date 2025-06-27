import { useState } from "react";
import Form from "./components/Form";
import ShowTask from "./components/ShowTask";

export default function App() {
  const [load,setLoad] = useState(false)
  return (
    <>
    <ShowTask load={load} setLoad={setLoad}/>
    <Form setLoad={setLoad}/>
    </>
  )
}
