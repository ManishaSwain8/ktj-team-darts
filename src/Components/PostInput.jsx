import axios from "axios";
import React from "react";
import Header from "./Header";
// {
//     "collection": "posts",
//     "database": "smartathon",
//     "dataSource": "iitkgp-webathon",
//     "document": {
//       "u_oid":"1234",
//       "event_name":"Hello World",
//       "event_description":"Helllooo World ",
//       "event_date":"",
//       "event_location":" ",
//       "keywords":[],
//       "event_image":""
//     }
// }
const PostInput = () => {
  const [event, setEvent] = React.useState({
    name: "",
    desc: "",
    city: "",
    date: "",
    teamSize: "",
    img_url: "",
    location: "",
  });

  const onHandleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    console.log(event);
    axios
      .post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/data-iuasu/endpoint/data/v1/action/insertOne",
        {
          collection: "posts",
          database: "smartathon",
          dataSource: "iitkgp-webathon",
          document: {
            u_oid: localStorage.getItem("userInfo")._id,
            event_name: event.name,
            event_description: event.desc,
            event_date: event.date,
            event_location: event.location,
            keywords: [],
            event_image: event.img_url,
            name: localStorage.getItem("username"),
            requied_team: event.teamSize,
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
        if (res.data.insertedId) {
          window.location.href = "/";
        }
      });
  };

  return (
    <>
      <Header />
      <form className="w-full mx-auto mt-20 max-w-lg">
        <h1 className="text-center text-3xl my-16">EVENT REGISTRATION</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Event Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
              onChange={onHandleChange}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="desc"
              onChange={onHandleChange}
              placeholder="..."
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="location"
              onChange={onHandleChange}
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date"
              type="date"
              name="date"
              onChange={onHandleChange}
              placeholder=""
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-url"
              type="text"
              name="img_url"
              onChange={onHandleChange}
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0 mt-2">
            <input
              className="mx-auto bg-[#9e1111] hover:bg-[#d61313] px-6 py-2 block rounded-xl text-white "
              // className="appearance-none mt-6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-url"
              type="submit"
              placeholder="Albuquerque"
              onClick={onClickHandle}
              value={"Submit"}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0 mt-6">
            <input
              className="mx-auto bg-[#9e1111] hover:bg-[#d61313] px-6 py-2 block rounded-xl text-white "
              // className="appearance-none mt-6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-url"
              type="submit"
              placeholder="Albuquerque"
              onClick={() => {
                window.location.href = "/";
              }}
              value={"Back"}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default PostInput;
