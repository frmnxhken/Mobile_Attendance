import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Badge from "./Badge";
import InGrayIcon from "@/assets/Icons/InGrayIcon";
import OutGrayIcon from "@/assets/Icons/OutGrayIcon";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const ListItem = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>29 April</Text>
          <View style={styles.space}>
            <InGrayIcon />
            <Text style={styles.actionText}>09:00</Text>
          </View>
        </View>
        <View>
          <Badge />
          <View style={[styles.space, {
            marginRight: 2,
            justifyContent: "flex-end"
          }]}>
            <OutGrayIcon />
            <Text style={styles.actionText}>15:00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 13,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginTop: 5
  },
  headerText: {
    fontSize: Sizes.header,
    fontFamily: "Inter-Medium"
  },
  actionText: {
    fontSize: Sizes.action,
    color: Colors.gray,
    fontFamily: "Inter-Regular"
  }
});

export default ListItem;