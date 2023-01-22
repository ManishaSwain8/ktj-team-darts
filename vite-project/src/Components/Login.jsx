import React from "react";
import red from "../assets/red.jpg";

// import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

export default function Login() {
  const FOT_LIST = [
    {
      img: <BsFacebook size={30} />,
    },
    {
      img: <BsLinkedin size={30} />,
    },
    {
      img: <BsDiscord size={30} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen justify-center">
      <div className="hidden md:block relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-white text-center text-3xl">Connect with your team.</h1>
        </div>
        <img className="w-full h-full object-cover " src={red} alt="" />
      </div>

      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-6xl font-bold text-center py-6">Welcome back!</h2>
          <div className="text-xl flex-flex-col py-2">
            <label>Username</label>
            <input className="border rounded-full p-3 ml-1 mx-56 w-full" type="text" />
          </div>
          <div className="text-xl flex-flex-col py-2 gap-2 ">
            <label>Password</label>
            <input className="border rounded-full p-3 ml-1 mx-56 w-full" type="password" />
          </div>
          <div className="flex justify-between">
            <p className="flex items-center mr-2">
              <input className="mr-2 " type="checkbox" />
              Remember me
            </p>
            <a href="#forgot">Forgot Password?</a>
          </div>
          <button className="border w-full my-5 py-3 bg-[#BF3737] hover:bg-[#c91d1d] text-white rounded-full">Login</button>
          <br />
          <br />
          <div className="items-center">
            Or <a href="#login">login</a> with
            <br />
            <a href="#register">Don't have an account? Register.</a>
          </div>{" "}
          <p className="text-center">Or login with</p>
          <br />
          <div className="flex gap-4">
            {FOT_LIST.map((foot, index) => (
              <div className="" key={index}>
                <a target="_blank" href="#">
                  <div className="rounded-2xl">{foot.img}</div>
                </a>
              </div>
            ))}
          </div>
          <br />
          <p className="text-center">Don't have an account? Register.</p>
        </form>
      </div>
    </div>
  );
}
