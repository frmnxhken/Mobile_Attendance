import React from "react";
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import HeaderBar from "@/components/ui/HeaderBar";

import Sizes from "@/constants/Sizes";
import useChangePassForm from "@/hooks/useChangePassForm";

const ChangePassword = () => {
  const { form, errors, handleInput, handleSubmit } = useChangePassForm();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar name="Change Password" />
          <View style={styles.formContainer}>
            <Text style={styles.headerTitle}>Create New Password</Text>
            <InputField
              label="Current Password"
              placeholder="Input your current password"
              value={form.current_password}
              onChangeText={(text) => handleInput("current_password", text)}
              feedback={ errors.current_password }
              />
            <InputField
              label="New Password"
              placeholder="Input your new password"
              value={form.new_password}
              onChangeText={(text) => handleInput("new_password", text)}
              feedback={ errors.new_password }
              />
            <InputField
              label="Confirm Password"
              placeholder="Confirm your password"
              value={form.new_password_confirmation}
              onChangeText={(text) => handleInput("new_password_confirmation", text)}
              feedback={ errors.new_password_confirmation }
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
