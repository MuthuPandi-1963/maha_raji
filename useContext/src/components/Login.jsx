import React, { useState } from "react";
import Input from "./Input";
const loginFormData = [
  {
    name: "Username",
    id: "username",
    type: "text",
    placeholder: "Enter a Username",
  },
  {
    name: "Password",
    id: "password",
    type: "password",
    placeholder: "Enter a password",
  },
];
const FormData = {
  username: "",
  password: "",
};
export default function Login() {
  const [data, setData] = useState(FormData);
  const handleChange = (e) =>
    setData((prev) => {
      const { name, value } = e.target;
      return { ...prev, name: value };
    });

    const handleLogin = ()=>{
        console.log(data);
        setData(FormData)
        
    }
  return (
    <>
      <div className="grid  h-screen content-center gap-10  justify-center">
        <div className="border-2 border-blue-800 p-10 rounded-md ">

        <h1 className="text-center text-3xl my-4 font-bold">Login form</h1>
        <div className="grid gap-4 justify-center ">
          {loginFormData.map((val, id) => (
              <Input key={id} {...val} value={data[val.id]} onChange={handleChange} />
            ))}
        </div>
        <button onClick={handleLogin} className="w-full text-white bg-blue-700 hover:bg-blue-500 font-semibold py-2 px-10 mt-6 mb-2 rounded-lg">Login</button>
        </div>
      </div>
    </>
  );
}
