import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Feed = ({ feed }) => {
  const navigate = useNavigate();
  const onHandleClick = (e) => {
    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/insertOne",
        {
          collection: "joinrequests",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          document: {
            p_oid: feed._id,
            u_oid: localStorage.getItem("userInfo")._id,
            status: "Pending",
            name: localStorage.getItem("username"),
            jobtitle: localStorage.getItem("userInfo").jobtitle,
            institution: localStorage.getItem("institution"),
            gender: localStorage.getItem("gender"),
            photo:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          },
        },
        {
          headers: {
            "api-key":
              "MbNUDJJjGFkcBsIaLzGSOJtOxZazEGwYR62FdeF1RrabOkbAPLpliilYCSK9iOQN",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        alert("JOIN REQUEST SENT");
      })
      .catch((err) => {});
  };
  return (
    <>
      {/* <Header /> */}
      <div className="w-[80%] sm:w-[60%] bg-white rounded-xl mx-auto px-5 py-2 my-5 shadow-2xl">
        <div className="user flex items-center gap-4 my-4">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avter-username"
            className="w-14 rounded-full"
          />
          <div>
            <div className="text-sm">{feed.name}</div>
            <div className="text-sm">{feed.jobtitle}</div>
          </div>
        </div>
        <h2 className="capitalize text-xl">{feed.event_name}</h2>
        <h5 className="text-base">{feed.event_location}</h5>
        <div>
          <img
            src={feed.event_image}
            alt="event-image"
            className="w-full object-cover h-48 rounded-md"
          />
        </div>
        <div className="py-4 px-2 rounded">
          <div className="text-sm">{feed.event_description}</div>

          {/* <div className="flex">
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">React</div>
          <div className="px-2 py-1 text-xs mt-2 mr-2 bg-red-300">KeyWord</div>
        </div> */}
        </div>
        <div className="text-right">
          <div
            onClick={() => navigate("/view?feed=" + feed._id)}
            className="text-blue-500 ml-auto  "
          >
            View all
          </div>
        </div>
        <div className="">
          <button
            onClick={onHandleClick}
            className="ml-auto bg-[#9e1111] hover:bg-[#d61313] px-6 py-2 block rounded-xl text-white "
          >
            JOIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Feed;
