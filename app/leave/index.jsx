import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image, StyleSheet } from "react-native";

import HeaderBar from "@/components/ui/HeaderBar";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Leave = () => {
    return (    
        <SafeAreaView style={styles.wrapper}>
          <ScrollView>
            <HeaderBar name="Leave Request" />
          </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: Sizes.h2,
    fontWeight: "600",
    color: "#000",
    marginBottom: Sizes.base,
  },
});

export default Leave;

