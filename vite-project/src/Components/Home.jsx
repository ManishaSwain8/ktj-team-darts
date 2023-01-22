import React from "react";
import Feed from "./Feed";
import FeedColllection from "./FeedColllection";
import Header from "./Header";
import SideBar from "./SideBar.jsx";
function Home() {
  return (
    <div>
      {/* <Header /> */}
      <main className="flex h-screen bg-gray-100">
        <SideBar />
        <FeedColllection />
      </main>
    </div>
  );
}

export default Home;
