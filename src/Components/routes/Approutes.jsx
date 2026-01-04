import React from "react";
import { Route, Routes } from "react-router-dom";
import Member from "../../Pages/Member/Member";
import TeamLead from "../../Pages/TeamLead/TeamLead";
import Login from "../../Pages/Login/Login";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lead" element={<TeamLead />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </>
  );
};

export default Approutes;
