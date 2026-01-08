import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHeader from "../Sidebar/SidebarHeader";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const TeamMemberLayout = () => {
  const [iscollapsed, setIsCollapsed] = useState(false);

  const content = [
    "dashboard",
    "Ai chatbot",
    "chat room",
    "meet room",
    "task",
    "resources related to project",
    "milestone",
    "calendar",
  ];
  return (
    <div className="flex  w-full h-screen">
      {/* Left side */}
      <div
        className={`${
          iscollapsed ? "w-16" : "w-64"
        } flex flex-col transition-all duration-300 ease-in-out`}
      >
        <SidebarHeader
          isCollapsed={iscollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Sidebar content={content} isCollapsed={iscollapsed} />
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="overflow-y-auto flex-1 flex bg-slate-700 text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberLayout;
