import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import Illustration from "@/assets/images/forgotPass.png";

import useForgotPassForm from "@/hooks/useForgotPassForm";

const ForgotPass = () => {
  const { form, errors, handleInput, handleSubmit } = useForgotPassForm();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={Illustration} />
        <Text style={styles.title}>Reset Your Password</Text>
        <View style={styles.form}>
          <InputField
            label="NIP"
            placeholder="Input Your NIP"
            value={form.nip}
            onChangeText={(text) => handleInput("nip", text)}
            feedback={ errors.nip }
            />
          <InputField
            label="Email"
            placeholder="Input Your Email"
            value={form.email}
            onChangeText={(text) => handleInput("email", text)}
            feedback={ errors.email }
            />
          <Button text="Send Request" style={{marginBottom: 10}} onPress={handleSubmit}/>
          <Button text="Cancel" type="secondary" onPress={() => router.navigate("/signin")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: "70%",
    maxHeight: 240,
  },
  container: {
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"    
  },
  form: {
    width: "100%",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
    marginBottom: 20,
    textAlign: "center"
  },
  description: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    marginBottom: 20,
    color: Colors.gray,
    textAlign: "center",
    width: "80%"
  }
});

export default ForgotPass;
