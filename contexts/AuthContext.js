import React, { createContext, useContext, useEffect, useState } from "react";
import { Authentication } from "@/contexts/AuthContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = 'initoken';
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const signIn = async (credential) => {
    try {
        const response = await Authentication(credential);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    setIsAuthenticated(true);
  }
  const signOut = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
