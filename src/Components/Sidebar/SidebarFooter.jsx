import React from "react";
import { useAuth } from "../../Context/AuthContext";

const SidebarFooter = ({ isCollapsed }) => {
  const { name, role } = useAuth();

  let profile = name.split(" ");
  let n = profile.length;
  profile = profile[0][0].toUpperCase() + profile[n - 1][0].toUpperCase();

  console.log(profile);

  return (
    <div className="px-2 h-full flex justify-around items-center bg-slate-900 text-white cursor-pointer">
      <p
        className="bg-indigo-500
 px-3 py-2 rounded-[50%] font-bold text-xl"
      >
        {profile}
      </p>
      {!isCollapsed && (
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg">{name}</span>
          <span className="font-medium text-sm text-slate-400">
            {"Team " + role}
          </span>
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
