import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberDashboard from "../../Pages/Member/MemberDashboard/MemberDashboard";
import Login from "../../Pages/Login/Login";
import ForgotPassword from "../../Pages/Login/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import Home from "../Home/Home";
import TeamLeadLayout from "../TeamLeadLayout/TeamLeadLayout";
import TeamMemberLayout from "../TeamMemberLayout/TeamMemberLayout";
import AddResources from "../../Pages/TeamLead/AddResources/AddResources";
import AddTeamMember from "../../Pages/TeamLead/AddTeamMember/AddTeamMember";
import AllocateTask from "../../Pages/TeamLead/AllocateTask/AllocateTask";
import CreateMeeting from "../../Pages/TeamLead/CreateMeeting/CreateMeeting";
import AddMilestone from "../../Pages/TeamLead/AddMilestone/AddMilestone";
import Calendar from "../../Pages/TeamLead/Calendar/Calendar";
import TeamLeadDashboard from "../../Pages/TeamLead/LeadDashboard/LeadDashboard";
import AIChatbot from "../../Pages/Member/AIChatbot/AIChatbot";
import ChatRoom from "../../Pages/Member/ChatRoom/ChatRoom";
import MeetRoom from "../../Pages/Member/MeetRoom/MeetRoom";
import Milestone from "../../Pages/Member/Milestone/Milestone";
import Resources from "../../Pages/Member/Resources/Resources";
import Tasks from "../../Pages/Member/Tasks/Tasks";

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
          <Route index element={<TeamLeadDashboard />} />
          <Route path="add-team-member" element={<AddTeamMember />} />
          <Route path="add-resources" element={<AddResources />} />
          <Route path="allocate-task" element={<AllocateTask />} />
          <Route path="create-meeting" element={<CreateMeeting />} />
          <Route path="add-milestone" element={<AddMilestone />} />
          <Route path="calendar" element={<Calendar />} />
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
          <Route index element={<MemberDashboard />} />
          <Route path="ai-chatbot" element={<AIChatbot />} />
          <Route path="chat-room" element={<ChatRoom />} />
          <Route path="meet-room" element={<MeetRoom />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="resources" element={<Resources />} />
          <Route path="milestone" element={<Milestone />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </>
  );
};

export default Approutes;
