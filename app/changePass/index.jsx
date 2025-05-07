import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, TextInput, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Sizes from "@/constants/Sizes";

const ChangePassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long!");
      return;
    }

    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "Please enter both fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Password changed successfully!");
      setNewPassword(""); 
      setConfirmPassword("");
      router.navigate("/signin"); 
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar/>
          <View style={styles.formContainer}>
            <Text style={styles.headerTitle}>Create New Password</Text>
            <Text style={styles.subtitleText}>Create your new password below.</Text>

            <TextInput
              style={styles.input}
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.CTAContainer}>
        <Button
          text={loading ? "Resetting..." : "Reset"}
          style={styles.resetButton}
          onPress={handleReset}
          disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  formContainer: {
    marginTop: 30,
    alignItems: 'center', 
  },
  headerTitle: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
    marginBottom: 10,
    textAlign: 'center', 
  },
  subtitleText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    marginBottom: 20,
    textAlign: 'center', 
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: "#f4f4f4",
    marginBottom: 10,
    fontFamily: "Inter-Regular",
  },
  resetButton: {
    width: "100%", 
    backgroundColor: "#28A745",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 6,
    marginTop: 30,
    alignItems: "center",
  },
  CTAContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    rowGap: 10,
  }
});

export default ChangePassword;
