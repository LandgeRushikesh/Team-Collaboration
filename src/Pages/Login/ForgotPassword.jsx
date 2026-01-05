import React, { useState } from "react";
import ResetPassword from "../../Components/HandleForgotPassword/HandleForgotPassword";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const HandleReset = async (e) => {
    e.preventDefault();

    await ResetPassword(email);

    setEmail("");
    navigate("/login");
  };

  return (
    <div className="w-[100vw] min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-serif">
      <form
        onSubmit={(e) => HandleReset(e)}
        className="w-1/3 flex flex-col justify-around items-center bg-black bg-opacity-50 px-4 py-3 rounded-xl"
      >
        <h1 className="text-white font-bold text-3xl mb-3">
          Team Collaboration
        </h1>
        <h2 className="text-white font-semibold text-xl mb-3 text-left">
          Here you can reset your password...
        </h2>
        <input
          type="email"
          placeholder="Enter your Registered email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="w-[90%] text-white font-semibold text-sm bg-blue-950 bg-opacity-30 px-2 py-3 rounded-lg mb-3 focus:outline-none"
        />

        <button
          type="submit"
          className="w-[90%] text-white font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 bg-opacity-30 px-2 py-3 rounded-lg mb-3 transition-all duration-200 ease-in-out"
        >
          Send Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
