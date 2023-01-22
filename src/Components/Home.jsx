import React, { useState } from "react";
import Feed from "./Feed";
import FeedColllection from "./FeedColllection";
import Header from "./Header";
import Modal from "./Modal";
import PostInput from "./PostInput";
import SideBar from "./SideBar.jsx";
function Home() {
  const [modal, setModal] = useState(false);
  <button onClick={() => setModal((prev) => true)}></button>;
  return (
    <div>
      <Header />
      <main className="flex h-screen bg-gray-100">
        <SideBar />
        <FeedColllection />
      </main>

      {!modal ? <Modal children={<PostInput />} /> : null}
    </div>
  );
}

export default Home;
