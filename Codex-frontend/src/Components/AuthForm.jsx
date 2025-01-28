// src/Components/AuthForm.jsx
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "./Auth-context";
import { message } from "antd";
import Api from "./Api";
import Adimn from "../assets/Admin.png";
import Adimnn from "../assets/Adminn.png";

function AuthForm() {
  const { login } = Api();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }); // Attempt login

      const data = await response.json();

      auth.login(data.userId, data.token, data.email, data.role);
      message.success("Logged in successfully");
      navigate("/admin"); // Redirect to admin page upon successful login
    } catch (err) {
      setError("Invalid login credentials."); // Display error if login fails
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-black text-white ">
        <div className="w-1/2 h-screen pt-[15vh] lg:block hidden " >
          <div className="pl-[5vw]">
            <h1 className='lg:text-[4vw] text-[8vh] font-extrabold'>Admin Login</h1>
            <h1 className="lg:text-[1.5vw] text-[2vh]">This is Only for admin</h1>
          </div>
          <img className="h-[55vh] w-[39vw] mt-[15vh]" src={Adimn} alt="" />          
        </div>
        <div className="lg:w-1/2 w-full h-full pt-[20vh] flex justify-center items-center relative">
          <h1 className="text-white text-[5vh] absolute z-10 top-[13vh] font-bold lg:hidden block" >Admin Login</h1>
          <img className=" absolute h-[130vh] mt-[-20vh] object-cover" src={Adimnn} alt="" />
          <div className="lg:w-[30vw] w-[80vw] h-[70vh] bg-black rounded-[5vh] absolute px-[5vw] py-[7vh] flex flex-col justify-between">
            <h1 className="lg:text-[1.5vw] text-[2vh] text-center">Please enter your details</h1>
            <form className="pb-[5vh]" onSubmit={handleSubmit}>
            <h1 className="lg:text-[1.5vw] text-[2vh]">Email</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your woxsen.edu.in email"
              className="w-full px-4 lg:py-2 py-[1vh] mb-[3vh] mt-[2vh] bg-black border border-[#9d9d9d] rounded"
            />
            <h1 className="lg:text-[1.5vw] text-[2vh]">Password</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 lg:py-2 py-[1vh] mb-[5vh] mt-[2vh] bg-black border border-[#9d9d9d] rounded"
            />
            <button
              type="submit"
              className="w-fit lg:px-[3vw] px-[15vw] lg:py-[1vh] py-[1.5vh] lg:ml-[6vw] ml-[15vw] bg-white text-black rounded-full font-medium"
            >
              Login
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
