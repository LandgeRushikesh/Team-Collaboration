import React from "react";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ content, isCollapsed }) => {
  return (
    <div className="bg-slate-800 h-full relative text-white">
      <div className="overscroll-y-auto">
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="w-full absolute bottom-0 z-10 h-16">
        <SidebarFooter isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
