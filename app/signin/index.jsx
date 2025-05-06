import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

const SignIn= () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign In</Text>
        <InputField
          label="Email"
          placeholder="Input your email"
        />
        <InputField
          label="Password"
          placeholder="Input your password"
        />
        <Button text="Sign In" title="Sign In" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "center"
  },
  titleText: {
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginBottom: 50
  },
});

export default SignIn;
