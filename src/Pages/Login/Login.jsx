import React, { useState } from "react";
import { auth } from "../../Config/Firbase-Config";
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
      alert("User Logged In Successfully!!!");

      const userId = res.user.uid;

      const role = await CheckRole(userId);

      if (role === "Lead") {
        navigate("/lead");
      } else if (role === "Member") {
        navigate("/member");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => loggedIn(e)}>
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
