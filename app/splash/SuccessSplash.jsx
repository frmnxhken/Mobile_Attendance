import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router";

import Illustration from "@/assets/images/Illustration.png";
import Button from "@/components/ui/Button";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import SuccessMessages from "@/constants/Message";

const SuccessSplash = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const message = SuccessMessages[type];

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={Illustration}/>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.description}>{message.description}</Text>
        <Button onPress={() => router.navigate("/")} text="Back to Home" type="dark"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: 200,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"    
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

export default SuccessSplash