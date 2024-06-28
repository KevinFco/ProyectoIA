import "../../index.css";
import React from "react";
import Btn from "../btn/Btn";
import InputForm from "./InputForm";
import { useState } from "react";
import { motion } from "framer-motion";
import backgroundSVG from "../../assets/images/header.svg";
import LabelForm from "./LabelForm";
import { NavLink } from "react-router-dom";
import useSignIn  from "../hooks/useSingIn";


const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const { signIn } = useSignIn(); // Desestructuramos signIn de useSignIn

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      await signIn(name, username, email, password); // Llamamos a signIn con los datos del formulario
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex bg-[#EAECEF]">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-full h-full mr-10 absolute bg-cover xl:bg-center xxs:bg-center bottom-20 md:bg-backgroundSVGResponsiveTablet xxs:mx-auto xl:bg-backgroundSVG xxs:bg-backgroundSVGResponsive"
      >
        <div className="xxs:mt-40 md:mt-48 md:ml-14 xl:mt-28 xl:ml-52 xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:h-full">
          <div className="xxs:text-center xl:mb-10">
            <span className="uppercase font-light text-4xl *:  text-white -tracking-[-1rem]">
              Grove
            </span>
          </div>
          <div className="max-w-md">
            <div className="flex flex-col xxs:items-center xxs:mx-20 md:mt-36 xl:mt-20 xxs:mt-32">
              <form onSubmit={handleSignIn}>
                <div className="mb-4 flex flex-col">
                  <LabelForm content="name">
                    <span> Name</span>
                  </LabelForm>
                  <input
                    name="name"
                    id="name"
                    value={name}
                    type="name"
                    placeholder="name"
                    onChange={({ target }) => setName(target.value)}
                    className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <LabelForm content="username">Username</LabelForm>
                  <input
                    name="username"
                    id="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <LabelForm content="email">Email</LabelForm>
                  <input
                    name="email"
                    id="email"
                    value={email}
                    type="text"
                    placeholder="Username"
                    onChange={({ target }) => setEmail(target.value)}
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
                    placeholder="password"
                    onChange={({ target }) => setPassword(target.value)}
                    className="w-[200px] rounded-full px-4 py-1 border focus:outline-none border-[#000000]"
                  />
                </div>
                <div className="mb-4 md:ml-8 flex flex-col xl:ml-8">
                <NavLink
                    type="submit"
                    className="bg-[#FBB01C] p-1 rounded-full h-8 w-24 text-lg text-black m-6 font-medium"
                    to="/login"
                  >
                    Sign-Up
                    </NavLink>
                </div>
              </form>
              <div className="mb-4 flex flex-col xl:mr-56 md:mr-56">
                <p className="text-xs text-[#000000] m-auto font-semibold">
                  Already have an account?
                </p>
                <NavLink
                  className="text-xs text-[#000000] m-auto font-semibold"
                  to="/login"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FormSignUp;