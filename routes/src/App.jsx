import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Settings from "./components/pages/Settings";
import Login from "./components/pages/Login";
import Help from "./components/pages/Help";
import TechStack from "./components/pages/TechStack";
import SingleProducts from "./components/pages/SingleProducts";

export default function App() {
  return(
    <>
    <Navbar/>

    <Routes>

      {/* <Route path="" element={<Navbar/>}/> */}
      <Route path="about" element={<About/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="help" element={<Help/>}/>

      <Route path="products" element={<TechStack/>}/>
      <Route path="products/:id" element={<SingleProducts/>} />

    </Routes>
    
    </>
  )
}