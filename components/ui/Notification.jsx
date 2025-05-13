import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderBar from "@/components/ui/HeaderBar";
import Button from "@/components/ui/Button";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Notification = (props) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <HeaderBar name={props.header} />
      </View>
      <View style={styles.container}>
        {props.icon}
        <Text style={styles.Title}>{props.title}</Text>
        <Text style={styles.Description}>{props.description}</Text>
        {props.buttonText ? <Button text={props.buttonText} type="dark" onPress={props.onPress} /> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
    marginBottom: 20
  },
  Description: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    marginBottom: 20,
    color: Colors.gray,
    textAlign: "center",
    width: "80%"
  }
}

export default Notification;
