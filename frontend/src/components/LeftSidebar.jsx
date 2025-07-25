import React from "react";
import assets, { userDummyData } from "./../assets/assets";
import { useNavigate } from "react-router-dom";

const LeftSidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        {/* logo and menu icons  */}
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40 " />
          <div className="relative oy-2 group">
            <img
              src={assets.menu_icon}
              alt="menu-icon"
              className="max-w-5 cursor-pointer"
            />
            {/* sub menu item  */}
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>
        {/* search bar and icon  */}
        <div className="bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5 ">
          <img src={assets.search_icon} alt="search" className="w-3" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
            placeholder="Search User..."
          />
        </div>

        {/* display user details  (profile image name and online/offline status, and message number if there is any message ) */}
        <div className="flex flex-col py-4">
          {userDummyData.map((user, index) => (
            <div
              onClick={() => setSelectedUser(user)}
              key={index}
              className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
                selectedUser?._id === user._id && "bg-[#282142]/50"
              }`}
            >
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt="user-profile"
                className="w-[35px] aspect-[1/1] rounded-full"
              />
              {/* name and status  */}
              <div className="flex flex-col leading-5">
                <p>{user.fullName}</p>
                {index < 3 ? (
                  <span className="text-green-400 text-xs">Online</span>
                ) : (
                  <span className="text-neutral-400 text-xs">Offline</span>
                )}
              </div>
              {index > 2 && (
                <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                  {index}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
