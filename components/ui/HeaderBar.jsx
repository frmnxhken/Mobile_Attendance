import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

import ArrowLeftIcon from "@/assets/Icons/ArrowLeftIcon";
import Sizes from "@/constants/Sizes";

const HeaderBar = (props) => {
  return (
    <View style={styles.container}>
      <Link href="/">
        <ArrowLeftIcon />
      </Link>
      <Text style={styles.headerText}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  headerText: {
    textAlign: "center",
    margin: "auto",
    paddingRight: 20,
    fontFamily: "Inter-Medium",
    fontSize: Sizes.header,
  },
});

export default HeaderBar;