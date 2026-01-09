import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, UserRound } from "lucide-react";

const SidebarHeader = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div
      className={`h-16 bg-slate-900 border-slate-800 text-white shrink-0 flex justify-between items-center ${
        !isCollapsed ? "px-3" : ""
      }`}
    >
      {!isCollapsed ? (
        <div className="flex justify-center items-center">
          <img src="/TC1.png" className="object-contain w-34 h-34" />
        </div>
      ) : (
        <div className="flex justify-center items-center shrink-0">
          <UserRound className="w-8 h-8" />
        </div>
      )}
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="flex text-3xl text-white bg-slate-700 w-fit rounded-full p-1.5 font-bold shrink-0"
      >
        {!isCollapsed ? (
          <ArrowLeftIcon
            className={`${!isCollapsed ? "w-5 h-5" : "w-3 h-3"}`}
          />
        ) : (
          <ArrowRightIcon
            className={`${!isCollapsed ? "w-5 h-5" : "w-3 h-3"}`}
          />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
