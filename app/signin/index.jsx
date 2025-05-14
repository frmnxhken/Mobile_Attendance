import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Alert from "@/components/ui/Alert";

import Colors from "@/constants/Colors";
import useSignInForm from "@/hooks/useSignInForm";

const SignIn = () => {
  const { form, errors, alert, handleInput, handleSignIn } = useSignInForm();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign In</Text>
        {alert && <Alert type="danger" message={alert} />}
        <InputField
          value={form.email}
          onChangeText={(text) => handleInput("email", text)}
          label="Email"
          placeholder="Input your email"
          feedback={errors && errors.email}
        />
        <InputField
          value={form.password}
          secure={true}
          onChangeText={(text) => handleInput("password", text)}
          label="Password"
          placeholder="Input your password"
          feedback={errors && errors.password}
        />
        <Link href={"/forgotPass"} style={styles.forgotPass}>
          Forgot Password?
        </Link>
        <Button onPress={handleSignIn} text="Sign In" title="Sign In" />
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
  forgotPass: {
    textAlign: "right",
    fontFamily: "Inter-Medium",
    textDecorationLine: 'underline',
    color: Colors.green,
    marginBottom: 20,
  },
});

export default SignIn;
