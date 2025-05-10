import React from "react";
import { SafeAreaView, Text, View, ScrollView, TextInput, StyleSheet, Alert } from "react-native";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import HeaderBar from "@/components/ui/HeaderBar";
import Sizes from "@/constants/Sizes";

const ChangePassword = () => {
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
            />
            <InputField
              label="New Password"
              placeholder="Input your new password"
            />
            <InputField
              label="Confirm Password"
              placeholder=""
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.CTAContainer}>
        <Button
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
