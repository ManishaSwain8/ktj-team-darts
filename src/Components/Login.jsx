import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import red from "../assets/red.jpg";
export default function Login() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/findOne",
        {
          collection: "user",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          filter: {
            email: userDetails.username,
            password: userDetails.password,
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
        console.log(res);
        if (res.document !== null) {
          localStorage.setItem("userInfo", JSON.stringify(res.document));
          navigate("/");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="">
        <div className="justify-center"></div>
        <img
          className="w-full h-full object-cover   max-md:w-full "
          src={red}
          alt=""
        />
      </div>

      <div className="bg-white flex flex-col justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-[400px] w-full mx-auto bg-white "
        >
          <h2 className="text-5xl font-bold text-center py-6 text-[#9e1111]">
            Welcome back!
          </h2>
          <div className="text-xl flex-flex-col py-2 text-gray-500 ">
            <div>
              <label>Username</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label>Password</label>
              <input
                className="border rounded-full p-3 ml-0 w-96"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-between ">
            <p className="flex items-center mr-2">
              <input className="mr-2 " type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <br />
          <button
            onClick={Submit}
            className="border w-full my-5 py-3 bg-[#9e1111] hover:bg-[#d61313] text-white rounded-full"
          >
            Login
          </button>
          <br />
          <br />
          <div className="items-center">
            <p className="text-center">Don't have an account? Register.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
