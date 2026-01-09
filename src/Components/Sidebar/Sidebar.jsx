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
              `py-3 mx-2 px-2 rounded-lg transition-all duration-300 ease-in-out flex justify-start items-center ${
                isActive ? "bg-slate-600" : ""
              }`
            }
          >
            <span>
              <item.icon className="w-5 h-5 shrink-0 mx-2" />
            </span>{" "}
            {!isCollapsed && <span>{item.Name}</span>}
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
