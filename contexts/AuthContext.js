import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Authentication, deAuthentication } from "@/services/AuthService";

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
    const response = await Authentication(credential);
    if (response.success) {
      const { access_token: token, user } = response.data;
      await AsyncStorage.setItem("access_token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      router.replace("/");
      return null;
    }
    return {
      errors: response.errors,
      message: response.message,
    }
  }

  const signOut = async () => {
    try {
      router.replace("/signin");
      setUser(null);
      setIsAuthenticated(false);
      await deAuthentication();
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("user");
    } catch (error) {
      return error;
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
