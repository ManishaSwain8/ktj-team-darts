import React from "react";
import po from "../assets/po.jpg";
import Feed from "./Feed";
function Home() {
  return (
    <div>
      <header className="bg-black w-full h-16 flex gap-40 place-content-center">
        <h1 className="text-white p-4 ml">PartHunt</h1>
        <div className="flex items-center">
          <div className="flex border  rounded-tl-lg">
            <input type="text" className="block w-full px-12 py-2  bg-black rounded-full text-white " placeholder="Search..." />
            <button className="px-2 text-white bg-purple-600 border-l rounded-full ">Search</button>
          </div>
        </div>
        <img src={po} className="mt-2 h-12 w-12 rounded-full object-right"></img>
      </header>

      {/* loop */}
      <div className="my-4">
        <Feed />
      </div>
      <div className="my-4">
        <Feed />
      </div>

      <div className="my-4">
        <Feed />
      </div>
    </div>
  );
}

export default Home;
