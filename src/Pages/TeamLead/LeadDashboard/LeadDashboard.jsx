import React from "react";
import Stats from "./Stats";
import { useAuth } from "../../../Context/AuthContext";

const TeamLeadDashboard = () => {
  const { name } = useAuth();
  return (
    <div className="dashboard w-full">
      <div className="welcome-msg mx-3 my-4 px-4 py-5 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-600 to-slate-900">
        <h1 className="font-bold text-3xl font-serif">{`Welcome back, ${name} 👋`}</h1>
        <p className="font-semibold text-xl ">
          Here’s what’s happening with your team today
        </p>
      </div>
      <Stats />
      <div className="taskOverview"></div>
    </div>
  );
};

export default TeamLeadDashboard;
