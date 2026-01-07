import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!currentUser) {
      navigate("/login", { replace: true });
    }

    if (!role) {
      return;
    }
    if (role === "Lead") {
      navigate("/lead", { replace: true });
    } else if (role === "Member") {
      navigate("/member", { replace: true });
    }
  }, [currentUser, role, loading]);
  return (
    <div style={{ color: "black", textAlign: "center", marginTop: "40vh" }}>
      Loading...
    </div>
  );
};

export default Home;
