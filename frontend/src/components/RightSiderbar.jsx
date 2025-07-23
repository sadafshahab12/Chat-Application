import React from "react";
import assets from "../assets/assets";

const RightSiderbar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div>
        <div>
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="selected-user-image"
            className="w-20 aspect-[1/1] rounded-full "
          />
        </div>
      </div>
    )
  );
};

export default RightSiderbar;
