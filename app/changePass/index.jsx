import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import HeaderBar from "@/components/ui/HeaderBar";
import Sizes from "@/constants/Sizes";
import { updatePassword } from "@/services/UserService";

const ChangePassword = () => {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: ""
  });

  const handleInput = (fieldName, value) => {
    setForm(prev => ({ ...prev, [fieldName]: value }));
  }

  const handleSubmit = async () => {
    try {
      const response = await updatePassword(form);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar name="Change Password"/>
          <View style={styles.formContainer}>
            <Text style={styles.headerTitle}>Create New Password</Text>
            <InputField
              label="Current Password"
              placeholder="Input your current password"
              value={form.current_password}
              onChangeText={(text) => handleInput("current_password", text)}
            />
            <InputField
              label="New Password"
              placeholder="Input your new password"
              value={form.new_password}
              onChangeText={(text) => handleInput("new_password", text)}
            />
            <InputField
              label="Confirm Password"
              placeholder="Confirm your password"
              value={form.new_password_confirmation}
              onChangeText={(text) => handleInput("new_password_confirmation", text)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.CTAContainer}>
        <Button
          onPress={handleSubmit}
          text="Reset"
          style={styles.resetButton}
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
  },
  headerTitle: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
    marginBottom: 50,
    textAlign: "center", 
  },
  CTAContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    rowGap: 10,
  }
});

export default ChangePassword;
