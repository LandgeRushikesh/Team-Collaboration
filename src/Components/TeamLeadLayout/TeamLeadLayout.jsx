import React, { useState } from "react";
import SidebarHeader from "../Sidebar/SidebarHeader";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const TeamLeadLayout = () => {
  const [iscollapsed, setIsCollapsed] = useState(false);
  const items = [
    { Name: "Dashboard", path: "/lead", end: true },
    { Name: "Add Team Member", path: "/lead/add-team-member" },
    { Name: "Add Resources", path: "/lead/add-resources" },
    { Name: "Allocate Task", path: "/lead/allocate-task" },
    { Name: "Create Meeting", path: "/lead/create-meeting" },
    { Name: "Add Milestone", path: "/lead/add-milestone" },
    { Name: "Calendar", path: "/lead/calendar" },
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
        <Sidebar content={items} isCollapsed={iscollapsed} />
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

export default TeamLeadLayout;
