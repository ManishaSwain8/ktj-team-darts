import React from "react";

const Feed = () => {
  return (
    <div className="max-w-lg bg-gray-100 rounded-xl mx-auto px-5 py-2">
      <div className="user flex items-center gap-4 my-4">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avter-username"
          className="w-14 rounded-full"
        />
        <div>
          <div className="text-sm">username</div>
          <div className="text-sm">job title</div>
        </div>
      </div>
      <h2 className="uppercase">Lorem, ipsum dolor.</h2>
      <h5>Bhubneswar</h5>
      <div className="bg-gray-50 py-4 px-2 rounded-lg">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius
          obcaecati quas earum expedita alias aliquid nulla deserunt, modi
          eligendi, doloribus eum a?
        </div>

        <div className="flex">
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
        </div>
      </div>
      <div className="text-right">
        <a href="view" className="text-blue-500 ml-auto  ">
          View all
        </a>
      </div>
      <div className="">
        <button className="ml-auto bg-blue-400 px-6 py-2 block shadow-md rounded-lg">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default Feed;
