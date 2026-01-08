import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHeader from "../Sidebar/SidebarHeader";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const TeamMemberLayout = () => {
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
    <>
      <div>
        <SidebarHeader />
        <Header />
      </div>
      <div className="body">
        <Sidebar content={content} />
        <Outlet />
      </div>
    </>
  );
};

export default TeamMemberLayout;
