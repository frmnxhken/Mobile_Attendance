import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Badge from "./Badge";
import InGrayIcon from "@/assets/Icons/InGrayIcon";
import OutGrayIcon from "@/assets/Icons/OutGrayIcon";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { formatToDayMonth, formatTime } from "@/utils/dateHelpers";

const ListItem = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>
            {formatToDayMonth(props.date)}
          </Text>
          <View style={styles.space}>
            <InGrayIcon />
            <Text style={styles.actionText}>{formatTime(props.checkin ?? "--:--")}</Text>
          </View>
        </View>
        <View>
          {props.status === "present" ? 
            (<Badge text={props.status}/>):
            (<Badge text={props.status} color="red"/>)
          }
          <View style={[styles.space, {
            marginRight: 2,
            justifyContent: "flex-end"
          }]}>
            <OutGrayIcon />
            <Text style={styles.actionText}>{formatTime(props.checkout ?? "--:--")}</Text>
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