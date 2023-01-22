import axios from "axios";
import React, { useEffect } from "react";
import Feed from "./Feed";

export default function FeedColllection() {
  const [feeds, setFeed] = React.useState([]);

  useEffect(() => {
    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/find",
        {
          collection: "posts",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          filter: {},
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
        setFeed(res.data.documents);
        console.log(res.data.documents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-y-scroll w-full">
      {feeds.map((feed, idx) => (
        <Feed key={idx} feed={feed} />
      ))}
    </div>
  );
}
