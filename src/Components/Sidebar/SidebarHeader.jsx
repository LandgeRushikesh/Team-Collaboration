import React from "react";

const SidebarHeader = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className="h-16 bg-red-400 shrink-0">
      <p>SidebarHeader</p>
      <button onClick={() => setIsCollapsed((prev) => !prev)}>click</button>
    </div>
  );
};

export default SidebarHeader;
