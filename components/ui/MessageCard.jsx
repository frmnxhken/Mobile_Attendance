import React from "react";
import { View, Text, StyleSheet } from "react-native";


import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Ionicons } from "@expo/vector-icons";


const MessageCard = ({status = "", content, date}) => {
  let type = "";

  if (status === "approve") {
    type = "success";
  } else if (status === "pending") {
    type = "warning";
  } else {
    type = "danger";
  }

  const types = {
    success: {
      icon: "checkmark-circle",
      color: Colors.green,
      bg: Colors.lightGreen
    },
    warning: {
      icon: "time",
      color: Colors.blue,
      bg: Colors.lightBlue
    },
    danger: {
      icon: "close-circle",
      color: Colors.red,
      bg: Colors.pink
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={{
          backgroundColor: types[type].bg,
          padding: 10, 
          borderRadius: 20,
        }}>
          <Ionicons name={types[type].icon} size={18} color={types[type].color} style={styles.icon} />
        </View>
        <View style={{
          maxWidth: "80%",
        }}>
          <Text style={styles.headerText}>Excuse {status}</Text>
          <Text style={styles.actionText}>{content}</Text>
          <Text style={styles.actionText}>{date}</Text>
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
    alignItems: "baseline",
    gap: 10,
    padding: 20,
  },
  headerText: {
    fontSize: Sizes.header,
    fontFamily: "Inter-Medium",
    marginBottom: 10
  },
  actionText: {
    fontSize: Sizes.action,
    color: Colors.gray,
    fontFamily: "Inter-Regular",
  }
});

export default MessageCard;