import React from "react";

const Feed = () => {
  return (
    <div className="w-[80%] sm:w-[60%] bg-white rounded-xl mx-auto px-5 py-2 my-5 ">
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
      <h2 className="capitalize text-xl">Indigo Event Planning.</h2>
      <h5 className="text-base">Bhubneswar</h5>
      <div>
        <img
          src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
          alt="event-image"
          className="w-full object-cover h-48 rounded-md"
        />
      </div>
      <div className="py-4 px-2 rounded">
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius
          obcaecati quas earum expedita alias aliquid nulla deserunt, modi
          eligendi, doloribus eum a?
        </div>

        <div className="flex">
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">React</div>
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
        </div>
      </div>
      <div className="text-right">
        <a href="view" className="text-blue-500 ml-auto  ">
          View all
        </a>
      </div>
      <div className="">
        <button className="ml-auto bg-[#9e1111] hover:bg-[#d61313] px-6 py-2 block rounded-xl text-white  ">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default Feed;
