import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";

import CameraIcon from "@/assets/Icons/CameraIcon";

import Sizes from "@/constants/Sizes";
import useUpdatePhotoProfile from "@/hooks/useUpdatePhotoProfile";

const EditProfile = () => {
  const { photo, handlePick, handleSubmit } = useUpdatePhotoProfile();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderBar name="Edit Profile" />
        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: photo }}
              style={styles.avatar}
            />
            <TouchableOpacity onPress={handlePick} style={styles.cameraButton}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View Style={styles.Content}>
          <Text style={styles.titleText}>Update Your Photo</Text>
        </View>
      </View>
      <View style={styles.CTAContainer}>
        <Button onPress={handleSubmit} text="Save Changes" style={{ width: "100%" }} />
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
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 30,
    right: 5,
    backgroundColor: "#000",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
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