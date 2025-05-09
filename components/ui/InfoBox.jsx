import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const InfoBox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    shadowColor: Colors.shadow,
    elevation: 13,
  },
  label: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Medium",
    maxWidth: 50,
    minWidth: 50
  },
  value: {
    fontSize: Sizes.body,
    color: Colors.gray,
    fontFamily: "Inter-Regular",
    textAlign: "right",
    width: "80%"
  },
});

export default InfoBox