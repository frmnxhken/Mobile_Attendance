import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/ui/Button";
import InfoBox from "@/components/ui/InfoBox";
import HeaderBar from "@/components/ui/HeaderBar";

import Sizes from "@/constants/Sizes";
import { profiles } from "@/constants/Data";

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar name="Profile"/>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg" }} // Ganti dengan gambar asli
              style={styles.avatar}
            />
            <Text style={styles.titleText}>Karina Blue</Text>
            <Button text="Edit Profile" style={styles.editButton} onPress={() => router.navigate("/profile/edit")}/>
          </View>
          <View>
            <Text style={styles.titleText}>Personal Information</Text>
            <View style={styles.informationContainer}>
              {profiles.map((profile, index) => (
                <InfoBox
                  key={index}
                  label={profile.label}
                  value={profile.value}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.CTAContainer}>
        <Button
          text="Change Password"
          style={{ width: "100%" }}
          onPress={() => router.navigate("/changePass")}
        />
        <Button onPress={() => router.navigate("/signin")} text="Logout" type="secondary" style={{ width: "100%" }} />
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
    paddingHorizontal: 15,
    paddingBottom: 40
  },
  profileHeader: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 40
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10
  },
  titleText: {
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold"
  },
  bodyText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular"
  },
  editButton: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  informationContainer: {
    flexDirection: "column",
    rowGap: 10,
    marginTop: 15
  },
  CTAContainer: {
    paddingHorizontal: 15,
    alignItems: "center",
    rowGap: 10,
    paddingVertical: 10
  }
});

export default Profile;