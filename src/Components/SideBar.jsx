import React from "react";
import { useNavigate } from "react-router-dom";
const sideBarCss = "test-center p-4 border-white hover:bg-purple-600";
export default function SideBar() {
  const navigate = useNavigate();
  const handleOnClick = (path) => {
    console.log(path);
    navigate(path);
  };
  const handleOnLogout = (path) => console.log("LOGOUT" + path);
  return (
    <div className="w-[25%] hidden sm:block bg-black text-white">
      <div>
        <div onClick={() => handleOnClick("/")} className={sideBarCss}>
          Home
        </div>
        <div onClick={() => handleOnClick("/event")} className={sideBarCss}>
          Event
        </div>
        <div onClick={() => handleOnClick("trend")} className={sideBarCss}>
          Trending
        </div>
        <div onClick={() => handleOnClick("view")} className={sideBarCss}>
          Participants
        </div>
        <div onClick={() => handleOnClick("contact")} className={sideBarCss}>
          Contact
        </div>
        <div onClick={() => handleOnClick("/about")} className={sideBarCss}>
          About
        </div>
        <div onClick={() => handleOnLogout("Logout")} className={sideBarCss}>
          LogOut
        </div>
      </div>
    </div>
  );
}
