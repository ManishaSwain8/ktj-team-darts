import React from "react";
import red from "../assets/red.jpg";
export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <div className="justify-center"></div>
        <img
          className="w-full h-full object-cover   max-md:w-full "
          src={red}
          alt=""
        />
      </div>

      <div className="bg-white flex flex-col justify-center ">
        <form className="max-w-[400px] w-full mx-auto bg-white ">
          <h2 className="text-5xl font-bold text-center py-6 text-[#9e1111] o">
            Welcome back!
          </h2>
          <div className="text-xl flex-flex-col py-2 text-gray-500 ">
            <div>
              <label>Username</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="text"
              />
            </div>
            <br />
            <div>
              <label>Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
              />
            </div>
          </div>

          <div className="flex justify-between ">
            <p className="flex items-center mr-2">
              <input className="mr-2 " type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <br />
          <button className="border w-full my-5 py-3 bg-[#9e1111] hover:bg-[#d61313] text-white rounded-full">
            Login
          </button>
          <br />
          <br />
          <div className="items-center">
            <p className="text-center">Don't have an account? Register.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
