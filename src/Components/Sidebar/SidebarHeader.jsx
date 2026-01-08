import React from "react";

const SidebarHeader = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className="h-16 bg-slate-900 text-white shrink-0 flex justify-around items-center">
      {!isCollapsed ? <h2>Team Collaboration</h2> : <h2>TC</h2>}
      <button onClick={() => setIsCollapsed((prev) => !prev)}>click</button>
    </div>
  );
};

export default SidebarHeader;
