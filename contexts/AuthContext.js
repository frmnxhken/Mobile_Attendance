import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Authentication } from "@/services/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("access_token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const signIn = async (credential) => {
    try {
        const response = await Authentication(credential);
        const token = response.data.access_token;
        await AsyncStorage.setItem("access_token", token);
        setIsAuthenticated(true);
        router.replace("/");
    } catch (error) {
        console.log(error)
    }
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
