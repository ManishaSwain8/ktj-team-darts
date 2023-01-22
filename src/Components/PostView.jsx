import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import queryString from "query-string";
import axios from "axios";
import Header from "./Header";

const PostView = () => {
  const path = window.location.href;
  const feed_id = path.split("=")[1];
  console.log(feed_id);
  const [PostAccpted, setPostAccepted] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    if (data === null) {
      window.location.href = "/login";
    }

    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/find",
        {
          collection: "joinrequests",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          filter: {
            p_oid: feed_id,
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
        console.log(res.data.documents);
        const data = res.data.documents.filter(
          (item) => item.status !== "Rejected"
        );
        setPostAccepted(data);
      });
  }, []);

  const onClickChangeStatus = (id, status) => {
    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/updateOne",
        {
          collection: "joinrequests",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          filter: {
            _id: { $oid: id },
          },
          update: {
            $set: {
              status: status,
            },
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
        console.log(res.data.documents);
        window.location.reload();
      });
  };
  return (
    <>
      <Header />

      <div className="max-w-xl bg-gray-100 rounded mx-auto px-5 py-2 shadow-md mt-4">
        <div>
          <div>
            <h2 className="uppercase text-center text-3xl text-[#9e1111] mt-4 ">
              Participant List
            </h2>
          </div>

          <table className="table-auto md:table-fixed w-full mt-10 ">
            <thead>
              <tr>
                <th align="left">Name</th>
                {/* added user only can see View Proflie */}
                <th>Responces</th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              {PostAccpted.map((post) => (
                <tr>
                  <td className="flex  items-center gap-3 py-3">
                    <img
                      src={post.photo}
                      alt="avter-username"
                      className="w-14 rounded-full "
                    />
                    <div>
                      <div className="text-sm">{post.name}</div>
                      <div className="text-sm">{post.institution}</div>
                    </div>
                  </td>

                  <td>
                    {/* added user only can see else View Proflie */}
                    <div className="flex justify-center ">
                      <button
                        onClick={() =>
                          onClickChangeStatus(post._id, "Accepted")
                        }
                        style={{
                          backgroundColor:
                            post.status === "Pending" ? "yellow" : "green",
                        }}
                        className=" px-2 py-1 mx-auto block rounded-md shadow-md"
                      >
                        <MdDone size={20} />
                      </button>
                      <button
                        onClick={() =>
                          onClickChangeStatus(post._id, "Rejected")
                        }
                        className="bg-red-600 px-2 py-1 mx-auto block rounded-md shadow-md"
                      >
                        <RxCross2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => (window.location.href = "/")}
            className="mx-auto bg-[#9e1111] hover:bg-[#d61313] px-6 py-2 block rounded-xl text-white"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PostView;
