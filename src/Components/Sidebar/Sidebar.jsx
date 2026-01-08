import React from "react";

const Sidebar = ({ content, isCollapsed }) => {
  return (
    <div className="bg-green-400 h-full">
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Sidebar;
