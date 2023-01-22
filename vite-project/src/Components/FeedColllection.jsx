import React from "react";
import Feed from "./Feed";

export default function FeedColllection() {
  return (
    <div className="overflow-y-scroll w-full">
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
}
