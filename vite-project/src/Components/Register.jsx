import React from "react";
import red from "../assets/red.jpg";
export default function Register() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <img
          className="w-full h-full object-cover  max-md:w-full max-md:h-32"
          src={red}
          alt=""
        />
      </div>

      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full  mx-auto bg-white  ">
          <h2 className="text-5xl font-bold text-[#9e1111] py-4">Register</h2>
          <p className="text-lg text-gray-400">
            Share yourself to hangout with us!
          </p>
          <br />
          <div className="text-xl flex-flex-col py-2 text-gray-500 ">
            <div>
              <label>First name</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="text"
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                className="border rounded-full p-3 ml-0  w-96"
                type="text"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="gmail"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
              />
            </div>
            <div>
              <label>Gender</label>
              <select className="border rounded-full p-3 ml-0 w-96" type="text">
                <option> </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <br />
            <div className="flex justify-between">
              <p className="flex items-center mr-2 text-lg">
                <input className="mr-2 " type="checkbox" />
                Agree to our Terms of use & Privacy Policy.
              </p>
            </div>

            <br />

            <div className="justify-center">
              <button className="border w-full my-5 py-4 text-bold bg-[#9e1111] hover:bg-[#c91d1d] text-white rounded-full">
                Let's go!
              </button>
              <p className="text-center">Already have an account?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
