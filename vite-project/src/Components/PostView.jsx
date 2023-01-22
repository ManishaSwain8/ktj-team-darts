import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const PostView = () => {
  return (
    <div className="max-w-xl bg-gray-100 rounded mx-auto px-5 py-2">
      <div>
        <div>
          <h2 className="uppercase">Participant List</h2>
        </div>

        <table className="table-auto md:table-fixed w-full">
          <thead>
            <tr>
              <th align="left">Name</th>
              {/* added user only can see View Proflie */}
              <th>Responces</th>
            </tr>
          </thead>
          <tbody>
            {/* 1 */}
            <tr>
              <td className="flex  items-center gap-3 py-3">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avter-username" className="w-14 rounded-full" />
                <div>
                  <div className="text-sm">username</div>
                  <div className="text-sm">job title</div>
                </div>
              </td>

              <td>
                {/* added user only can see else View Proflie */}
                <div className="flex justify-center">
                  <button className="bg-green-600 px-2 py-1 mx-auto block">
                    <MdDone size={24} />
                  </button>
                  <button className="bg-red-600 px-2 py-1 mx-auto block">
                    <RxCross2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
            {/* 2 */}
            <tr>
              <td className="flex  items-center gap-3">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avter-username" className="w-14 rounded-full" />
                <div>
                  <div className="text-sm">username</div>
                  <div className="text-sm">job title</div>
                </div>
              </td>

              <td>
                <div className="flex justify-center">
                  <button className="bg-green-600 px-2 py-1 mx-auto block">
                    <MdDone size={24} />
                  </button>
                  <button className="bg-red-600 px-2 py-1 mx-auto block">
                    <RxCross2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostView;
