import React from "react";
import SidebarFooter from "./SidebarFooter";
import { NavLink } from "react-router-dom";

const Sidebar = ({ content, isCollapsed }) => {
  return (
    <div className="bg-slate-800 h-full relative text-white">
      <div className="overscroll-y-auto flex flex-col">
        {content.map((item, index) => (
          <NavLink
            to={item.path}
            end={item.end}
            key={index}
            className={({ isActive }) =>
              `py-3 mx-2 px-2 text-center rounded-lg transition-all duration-300 ease-in-out ${
                isActive ? "bg-slate-600" : ""
              }`
            }
          >
            {item.Name}
          </NavLink>
        ))}
      </div>
      <div className="w-full absolute bottom-0 z-10 h-16">
        <SidebarFooter isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
