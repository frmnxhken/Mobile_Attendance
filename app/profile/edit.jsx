import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";

import CameraIcon from "@/assets/Icons/CameraIcon";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { profiles } from "@/constants/Data";

const EditProfile = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
        <HeaderBar name="Edit Profile"/>
            <View style={styles.profileContainer}>
                <View style={styles.avatarWrapper}>
                    <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg" }} // Ganti dengan gambar asli
                    style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.cameraButton}>
                        <CameraIcon/>
                    </TouchableOpacity>
                </View>
            </View>
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
  profileContainer: {
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
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

export default EditProfile;