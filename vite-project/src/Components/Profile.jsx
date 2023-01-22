import React from "react";
import red from "../assets/red.jpg";
import po from "../assets/po.jpg";

export default function () {
  return (
    <div className="">
      {/* <img
        className=" w-full h-44  object-cover max-md:w-full "
        src={red}
        alt=""
      />
      <img
        src={po}
        className="-mt-24 h-60 w-60 rounded-full max-sm:snap-center  "
      ></img>

      <div className="text-center">
        <div className="text-xl flex-flex-col py-2 text-gray-500  ">
          <div>
            <label>First name:</label>
            <input className="border rounded-full p-3 ml-0 w-96" type="text" />
          </div>
          <br />
          <div>
            <label>Last name:</label>
            <input
              className="border rounded-full p-3 ml-0 w-96"
              type="password"
            />
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
          <button className="border w-48 my-5 py-3 bg-[#9e1111] hover:bg-[#d61313] text-white rounded-full max-sm:justify-center">
            Update
          </button>
        </div>
      </div>
    </div> */}
      <img
        className=" w-full h-44  object-cover max-md:w-full "
        src={red}
        alt=""
      />

      <div className="relative flex min-sm:flex-none py-10 px-8 bg-gray-100 gap-4 ">
        {/* <img
          src={po}
          className="absolute left-6 -top-[200%] h-60 w-60 rounded-full max-sm:snap-center "
        ></img> */}
        <div className="">
          <img src={po} className="w-60  h-60  rounded-full -mt-28"></img>{" "}
        </div>
        <div className="left-8">
          <h1 className="text-2xl">Kevin Smith</h1>
          <p>ADvieryy fuyhjkll kkkduheuh</p>
          <div className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            necessitatibus ab magnam eum, ea similique praesentium sit officiis
            impedit enim.
          </div>
        </div>
      </div>
    </div>
  );
}
