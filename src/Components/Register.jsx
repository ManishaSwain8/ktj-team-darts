import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import red from "../assets/red.jpg";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
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
            photo:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            password: profileInfo.password,
            institution: "GITA",
            jobtitle: "Student",
            state: "Odisha",
            country: "INDIA",
          },
        },
        {
          headers: {
            "api-key":
              "MbNUDJJjGFkcBsIaLzGSOJtOxZazEGwYR62FdeF1RrabOkbAPLpliilYCSK9iOQN",
            Accept: "*/*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log("Rgister");
        axios
          .post(
            "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/findOne",
            {
              collection: "user",
              database: "smartathon",
              dataSource: "iitkgp-webathon",
              filter: {
                email: profileInfo.email,
                password: profileInfo.password,
              },
            },
            {
              headers: {
                "api-key":
                  "MbNUDJJjGFkcBsIaLzGSOJtOxZazEGwYR62FdeF1RrabOkbAPLpliilYCSK9iOQN",
                Accept: "*/*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.document !== null) {
              localStorage.setItem(
                "userInfo",
                JSON.stringify(res.data.document)
              );
              localStorage.setItem("username", res.data.document.name);
              localStorage.setItem("email", res.data.document.email);
              localStorage.setItem(
                "institution",
                res.data.document.institution
              );
              localStorage.setItem("jobtitle", res.data.document.jobtitle);
              navigate("/");
            }
          });
      })
      .catch(() => {
        console.error("ERROR");
      });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <img
          className="w-full h-full object-cover  max-md:w-full max-md:h-32"
          src={red}
          alt=""
        />
      </div>
      <div className="bg-white flex-none min-sm:flex justify-center">
        <form className="max-w-[400px] w-full  mx-auto bg-white  ">
          <h2 className="text-5xl font-bold text-[#9e1111] py-4">Register</h2>
          <p className="text-lg text-gray-400">
            Share yourself to hangout with us!
          </p>
          <br />
          <div className="text-xl flex-flex-col py-2 text-gray-500 ">
            <div>
              <label>Full name</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="text"
                name="fullName"
                value={profileInfo.fullName}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="gmail"
                name="email"
                value={profileInfo.email}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
                name="password"
                value={profileInfo.password}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
                name="confirmPassword"
                value={profileInfo.confirmPassword}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <label>Gender</label>
              <select className="border rounded-full p-3 ml-0 w-96" type="text">
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
              <button
                onClick={onHandleSubmit}
                className="border w-full my-5 py-4 text-bold bg-[#9e1111] hover:bg-[#c91d1d] text-white rounded-full"
              >
                Let's go!
              </button>
              <div onClick={() => navigate("/login")} className="text-center">
                Already have an account?
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
