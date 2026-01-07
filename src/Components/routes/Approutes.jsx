import React from "react";
import { Route, Routes } from "react-router-dom";
import Member from "../../Pages/Member/Member";
import TeamLead from "../../Pages/TeamLead/TeamLead";
import Login from "../../Pages/Login/Login";
import ForgotPassword from "../../Pages/Login/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import Home from "../Home/Home";

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
                <TeamLead />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/member"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="Member">
                <Member />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Approutes;
