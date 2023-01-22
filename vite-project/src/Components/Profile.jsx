import React from "react";
import red from "../assets/red.jpg";
import po from "../assets/po.jpg";
// import { IoPersonSharp } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export default function () {
  return (
    <div className="">
      <img className="w-full h-44 object-cover   max-md:w-full " src={red} alt="" />
      <img src={po} className="ml-28 -mt-14 h-60 w-60 rounded-full "></img>
      <div className="">
        <IoPersonSharp />
      </div>
      <div className="">
        <div className="text-xl flex-flex-col py-2 text-gray-500  ">
          <div>
            <label>First name:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="text" />
          </div>
          <br />
          <div>
            <label>Last name:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="password" />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="text" />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="text" />
          </div>
          <br />

          <div>
            <label>Gender:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="text" />
          </div>
          <button className="border w-48 my-5 py-3 bg-[#9e1111] hover:bg-[#d61313] text-white rounded-full">Update</button>
        </div>
      </div>
    </div>
  );
}
