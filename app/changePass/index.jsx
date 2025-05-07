import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { profiles } from "@/constants/Data";

const ChangePass = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
        <HeaderBar name="Change Password"/>
          <View Style={styles.Content}>
            <Text style={styles.titleText}>Karina Blue</Text>
            <Text style={styles.text}>Enmployee</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.CTAContainer}>
        <Button text="Save" style={{ width: "100%" }} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  cameraButton: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    padding: 8,
  },
  Content: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 40
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginTop: 20,
    marginBottom: 30
  },
  titleText: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: Sizes.body,
    color: Colors.gray,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  CTAContainer: {
    paddingHorizontal: 15,
    alignItems: "center",
    rowGap: 10,
    paddingVertical: 10
  }
});

export default ChangePass;