import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHeader from "../Sidebar/SidebarHeader";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  Video,
  CheckSquare,
  FolderOpen,
  Flag,
  CalendarDays,
} from "lucide-react";

const TeamMemberLayout = () => {
  const [iscollapsed, setIsCollapsed] = useState(false);

  const items = [
    { Name: "Dashboard", path: "/member", icon: LayoutDashboard, end: true },
    { Name: "AI Chatbot", path: "/member/ai-chatbot", icon: Bot },
    { Name: "Chat Room", path: "/member/chat-room", icon: MessageSquare },
    { Name: "Meet Room", path: "/member/meet-room", icon: Video },
    { Name: "Tasks", path: "/member/tasks", icon: CheckSquare },
    { Name: "Resources", path: "/member/resources", icon: FolderOpen },
    { Name: "Milestone", path: "/member/milestone", icon: Flag },
    { Name: "Calendar", path: "/member/calendar", icon: CalendarDays },
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

export default TeamMemberLayout;
