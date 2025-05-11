import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Authentication } from "@/services/AuthService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("access_token");
      const storedUser = await AsyncStorage.getItem("user");
      setIsAuthenticated(!!token);
      if (storedUser) setUser(JSON.parse(storedUser));
    }

    checkAuth();
  }, []);

  const signIn = async (credential) => {
    try {
        const response = await Authentication(credential);
        const token = response.data.access_token;
        const user = response.data.user;
        await AsyncStorage.setItem("access_token", token);
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        router.replace("/");
      } catch (error) {
        console.log(error)
      }
    }
    
  const signOut = async () => {
    try {
      router.replace("/signin");
      setUser(null);
      setIsAuthenticated(false);
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
