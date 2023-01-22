import React from "react";

import po from "../assets/po.jpg";
export default function Header() {
  return (
    <header className="bg-[#9e1111] w-full h-16 flex gap-40 place-content-center ">
      <h1 className="text-white p-4 ml text-3xl italic font-bold ">PartHunt</h1>
      <div className="flex items-center">
        <div className="flex border rounded-full ">
          <input
            type="text"
            className="block w-full px-12 py-2  bg-white rounded-full text-black "
            placeholder="Search..."
          />
          <button className="px-2 text-white bg-[#9e1111] border-l rounded-full ">
            Search
          </button>
        </div>
      </div>
      <img src={po} className="mt-2 h-12 w-12 rounded-full object-right"></img>
    </header>
  );
}
