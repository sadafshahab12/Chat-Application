import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import ChatContainer from "../components/ChatContainer";
import RightSiderbar from "./../components/RightSiderbar";

const Home = () => {
  const [seletedUser, setSelectedUser] = useState(false);
  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
          seletedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "grid-cols-2"
        }`}
      >
        <LeftSidebar
          selectedUser={seletedUser}
          setSelectedUser={setSelectedUser}
        />
        <ChatContainer
          selectedUser={seletedUser}
          setSelectedUser={setSelectedUser}
        />
        <RightSiderbar
          selectedUser={seletedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
    </div>
  );
};

export default Home;
