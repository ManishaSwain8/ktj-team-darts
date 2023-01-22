import React from "react";
import red from "../assets/red.jpg";
import po from "../assets/po.jpg";
export default function () {
  return (
    <div className="">
      <img
        className=" w-full h-44 object-cover   max-md:w-full "
        src={red}
        alt=""
      />
      <img src={po} className="ml-28 -mt-14 h-60 w-60 rounded-full "></img>
    </div>
  );
}
