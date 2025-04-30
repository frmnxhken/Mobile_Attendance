import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Button from "../../components/ui/Button";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign In</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#6A7282"
          value={email}
          onChangeText={setEmail}/>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Your password"
          placeholderTextColor="#6A7282"
          secureTextEntry
          value={password}
          onChangeText={setPassword}/>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>


        <Button text="Sign In" title="Sign In" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 69,
    color: "#0f172a",
  },
  label: {
    fontSize: 14,
    fontWeight: "medium",
    marginBottom: 6,
    color: "#364153",
  },
  input: {
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,

    //box shadow
    //for ios
    shadowColor: "rgba(4, 35, 129, 0.43)",
    shadowOffset: { width:0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 27,
    //for android
    elevation: 10,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#22c55e",
    fontWeight: "500",
    textDecorationLine: 'underline'
  },
});

export default SignInScreen;
