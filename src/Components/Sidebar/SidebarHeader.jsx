import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const SidebarHeader = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className="h-16 bg-slate-900 text-white shrink-0 flex justify-between items-center">
      {!isCollapsed ? (
        <div>
          <img src="/TC-logo.png" className="w-8 h-8" />
          <span>Team Collabration</span>
        </div>
      ) : (
        <img src="/TC-logo.png" />
      )}
      <button onClick={() => setIsCollapsed((prev) => !prev)}>
        {!isCollapsed ? (
          <ArrowLeftIcon className="flex text-3xl text-white bg-slate-700 w-fit rounded-full p-1 font-bold shrink-0" />
        ) : (
          <ArrowRightIcon className="flex text-3xl text-white bg-slate-700 w-fit rounded-full p-1 font-bold shrink-0" />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
