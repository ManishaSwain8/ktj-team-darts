import React from "react";
import po from "../assets/po.jpg";
function Home() {
  return (
    <div>
      <div className="bg-black w-full h-24 flex gap-40 place-content-center">
        <h1 className="text-white p-4 ml ">PartHunt</h1>
        <div className="flex items-center">
          <div className="flex border  rounded-full">
            <input
              type="text"
              className="block w-full px-12 py-2  bg-black rounded-full text-white "
              placeholder="Search for compition,groupe"
            />
          </div>
        </div>
        <img src={po} className="mt-4 h-12 w-12 rounded-full "></img>
      </div>
    </div>
  );
}

export default Home;
