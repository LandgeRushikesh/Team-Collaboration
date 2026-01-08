import React from "react";
import { Route, Routes } from "react-router-dom";
import Member from "../../Pages/Member/Member";
import TeamLead from "../../Pages/TeamLead/TeamLead";
import Login from "../../Pages/Login/Login";
import ForgotPassword from "../../Pages/Login/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import Home from "../Home/Home";
import TeamLeadLayout from "../TeamLeadLayout/TeamLeadLayout";
import TeamMemberLayout from "../TeamMemberLayout/TeamMemberLayout";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/lead"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="Lead">
                <TeamLeadLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route path="" element={<TeamLead />} />
        </Route>
        <Route
          path="/member"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="Member">
                <TeamMemberLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Member />} />
        </Route>
      </Routes>
    </>
  );
};

export default Approutes;
