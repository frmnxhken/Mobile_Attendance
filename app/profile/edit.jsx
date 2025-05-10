import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";

import CameraIcon from "@/assets/Icons/CameraIcon";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderBar name="Edit Profile" />
        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg" }} // Ganti dengan gambar asli
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraButton}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View Style={styles.Content}>
          <Text style={styles.titleText}>Karina Blue</Text>
          <Text style={styles.text}>Enmployee</Text>
        </View>
      </View>
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
  profileContainer: {
    alignItems: "center",
  },
  avatarWrapper: {
    position: "relative",
  },
  cameraButton: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 20,
    right: 5,
    padding: 8,
    backgroundColor: Colors.green,
    borderRadius: 100
  },
  Content: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 40
  },
  avatar: {
    width: 150,
    height: 150,
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

export default EditProfile;