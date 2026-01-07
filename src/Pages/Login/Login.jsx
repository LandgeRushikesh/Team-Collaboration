import React, { useState } from "react";
import { auth } from "../../Config/Firebase-Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import CheckRole from "../../Components/CheckRole/CheckRole";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loggedIn = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-[100vw] min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-serif">
      <form
        onSubmit={(e) => loggedIn(e)}
        className="w-1/3 flex flex-col justify-around items-center bg-black bg-opacity-50 px-4 py-3 rounded-xl"
      >
        <h1 className="text-white font-bold text-3xl mb-3">
          Team Collaboration
        </h1>
        <h2 className="text-white font-semibold text-xl mb-3 text-left">
          Here you can Log In...
        </h2>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="w-[90%] text-white font-semibold text-sm bg-blue-950 bg-opacity-30 px-2 py-3 rounded-lg mb-3 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="w-[90%] text-white font-semibold text-sm bg-blue-950 bg-opacity-30 px-2 py-3 rounded-lg mb-3 focus:outline-none"
        />
        <button
          type="submit"
          className="w-[90%] text-white font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 bg-opacity-30 px-2 py-3 rounded-lg mb-3 transition-all duration-200 ease-in-out"
        >
          Log In
        </button>
        <p className="text-slate-400 text-sm text-center mb-3">
          <strong>Note:</strong>Login credentials are provided by your Team Lead
        </p>
        <p
          className="text-center text-blue-900 underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in-out"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot password?
        </p>
      </form>
    </div>
  );
};

export default Login;
