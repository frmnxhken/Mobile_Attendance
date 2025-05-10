import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"
import Illustration from "@/assets/images/Illustration.png";
import Button from "@/components/ui/Button";
import Sizes from "@/constants/Sizes";
import { useRouter } from "expo-router";

const SuccessSplash = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={Illustration}/>
        <Text style={styles.title}>Yeay Sucess..</Text>
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
  }
});

export default SuccessSplash