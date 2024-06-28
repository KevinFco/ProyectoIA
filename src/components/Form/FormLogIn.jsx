import "../../index.css";
import React, { useState } from "react";
import Btn from "../btn/Btn";
import InputForm from "./InputForm";
import { useLogin } from "../hooks/useLogin";
import { motion } from 'framer-motion';
import backgroundSVG from '../../assets/images/header.svg';
import LabelForm from './LabelForm';
import backgroundSVGResponsive from '../../assets/images/responsiveLogin.svg';
import { NavLink } from 'react-router-dom';

const FormLogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useLogin();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try{

      await login(email, password);
      setPassword('')
      setUsername('')
    }catch(e){
      console.log(e.message)
    }
    
  }

  return (
    <div className="flex  bg-[#EAECEF] ">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-full h-full mr-10 absolute bg-cover xl:bg-center xxs:bg-center bottom-20 md:bg-backgroundSVGResponsiveTablet xxs:mx-auto xl:bg-backgroundSVG xxs:bg-backgroundSVGResponsive"
      >
        <div className="xxs:mt-24 md:mt-48 md:ml-14 xl:mt-28 xl:ml-52 xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:h-full  ">
          <div className="xxs:text-center">
            <span className="uppercase font-light text-4xl   *:  text-white -tracking-[-1rem]">
              Grove
            </span>
          </div>
          <div className="max-w-md">
            <div className="flex flex-col xxs:items-center xxs:mx-20 md:mt-36 xl:mt-20 xxs:mt-20">
              <form onSubmit={handleLogin}>
                <div className="mb-4 flex flex-col">
                  <LabelForm content="email">
                    <span>Email</span>
                  </LabelForm>
                  <input 
                    name="email" 
                    id="email"
                    value={email} 
                    type="text"
                    placeholder="Email"
                    onChange={({target}) => setEmail(target.value)} 
                    className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]" 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                  <LabelForm content="password">Password</LabelForm>
                  <input 
                    name="password"  
                    id="password"
                    value={password}  
                    type="password"
                    placeholder="Password"
                    onChange={({target}) => setPassword(target.value)} 
                    className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]" 
                    />
                </div>
                <div className="mb-4 md:ml-8 flex flex-col xl:ml-8">
                  <button href="/home" type="submit" className="bg-[#FBB01C] p-1 rounded-full h-8 w-24 text-lg text-black m-6 font-medium">Log-in</button>
                </div>
              </form>
              <div className="mb-4 flex flex-col  xl:mr-56 md:mr-56">
                <p className="text-xs text-[#000000] m-auto font-semibold">
                  {" "}
                  Did you forget your password?{" "}
                </p>
                <p className="m-auto font-normal text-[#000000]">
                  {" "}
                  Do you not have an account?{" "}
                </p>{" "}
                <a
                  className="text-xs text-[#000000] m-auto font-semibold"
                  href="logIn.html"
                >
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default FormLogIn;
