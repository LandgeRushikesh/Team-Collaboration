import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const RoleRoute = ({ children, allowedRole }) => {
  const { role, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
