import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Config/Firebase-Config";
import CheckRole from "../Components/CheckRole/CheckRole";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);

        const role = await CheckRole(user.uid);
        setRole(role);
      } else {
        setCurrentUser(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
