import React, { useEffect } from "react";
import Feed from "./Feed";

import FeedColllection from "./FeedColllection";
import Header from "./Header";
import SideBar from "./SideBar.jsx";
function Home() {
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      window.location.href = "/login";
    }
  });
  return (
    <div>
      <Header />
      <main className="flex h-screen bg-gray-100">
        <SideBar />
        <FeedColllection />
      </main>
    </div>
  );
}

export default Home;
