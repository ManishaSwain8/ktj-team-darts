import React, { useState } from "react";
import { Link } from "react-router-dom";
import red from "../assets/red.jpg";
import axios from "axios";

export default function Register() {
  const [profileInfo, setProfileInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/insertOne",
        {
          collection: "user",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          document: {
            name: profileInfo.fullName,
            email: profileInfo.email,
            gender: profileInfo.gender || "other",
            photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            password: profileInfo.password,
            institution: "GITA",
            jobtitle: "Student",
            state: "Odisha",
            country: "INDIA",
          },
        },
        {
          headers: {
            "api-key": "MbNUDJJjGFkcBsIaLzGSOJtOxZazEGwYR62FdeF1RrabOkbAPLpliilYCSK9iOQN",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((result) => {
        console.log("LOGIN");
        localStorage.setItem(
          "data",
          JSON.stringify({
            name: profileInfo.fullName,
            email: profileInfo.email,
            gender: profileInfo.gender || "other",
            photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            password: profileInfo.password,
            institution: "GITA",
            jobtitle: "Student",
            state: "Odisha",
            country: "INDIA",
          })
        );

        localStorage.setItem("profileID", result.data.insertedId);
        navigate("/");
      })
      .catch(() => {
        console.error("ERROR");
      });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <img className="w-full h-full object-cover  max-md:w-full max-md:h-32" src={red} alt="" />
      </div>

      <div className="bg-white flex-none min-sm:flex justify-center">
        <form className="max-w-[400px] w-full  mx-auto bg-white  ">
          <h2 className="text-5xl font-bold text-[#9e1111] py-4">Register</h2>
          <p className="text-lg text-gray-400">Share yourself to hangout with us!</p>
          <br />
          <div className="text-xl flex-flex-col py-2 text-gray-500 ">
            <div>
              <label>Full name</label>
              <input
                class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                type="text"
                name="fullName"
                value={profileInfo.fullName}
                onChange={onHandleChange}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                type="email"
                name="email"
                value={profileInfo.email}
                onChange={onHandleChange}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                type="password"
                name="password"
                value={profileInfo.password}
                onChange={onHandleChange}
              ></input>
            </div>
            {/* <div>
              <label>Confirm Password</label>
              <input
                class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                type="password"
                name="confirmPassword"
                value={profileInfo.confirmPassword}
                onChange={onHandleChange}
              ></input>
            </div> */}
            <div>
              <label>Gender</label>
              <select
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                type="text"
              >
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
              <button onClick={onHandleSubmit} className="border w-full my-5 py-4 text-bold bg-[#9e1111] hover:bg-[#c91d1d] text-white rounded-full">
                Let's go!
              </button>
              <Link to={"login"} className="text-center">
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
