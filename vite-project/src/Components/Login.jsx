import React from "react";
import red from "../assets/red.jpg";
export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <div className="justify-center">
          <h1 className="text-white -mt-5 text-center">
            Connect with your team.
          </h1>{" "}
        </div>
        <img className="w-full h-full object-cover " src={red} alt="" />
      </div>

      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-6xl font-bold text-center py-6">Welcome back!</h2>
          <div className="text-xl flex-flex-col py-2">
            <label>Username</label>
            <input className="border rounded-full p-3 ml-1 mx-56" type="text" />
          </div>
          <div className="text-xl flex-flex-col py-2 gap-2 ">
            <label>Password</label>
            <input
              className="border rounded-full p-3 ml-1 mx-56"
              type="password"
            />
          </div>

          <div className="flex justify-between">
            <p className="flex items-center mr-2">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <button className="border w-full my-5 py-3 bg-[#BF3737] hover:bg-[#c91d1d] text-white rounded-full">
            Login
          </button>
          <br />
          <br />
          <div className="items-center">
            <p>Or login with</p>
            <br />
            <br />

            <p>Don't have an account? Register.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
