import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import HeaderBar from "../../components/ui/HeaderBar";
import Button from "../../components/ui/Button";
import { Link } from "expo-router";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Profile = () => {
    return (
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#fff',}}>
            <HeaderBar name="Profile"/>
            <ScrollView>
                <View style={styles.container}>
                  <View style={styles.profileHeader}>
                      <Image
                          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg' }} // Ganti dengan gambar asli
                          style={styles.avatar}
                      />
                      <Text style={styles.Title}>Karina Blue</Text>
                      <Button text="Edit Profile" style={styles.editButton}/>
                  </View>
                  <Text style={styles.Title}>Personal Infornation</Text>
                  {InfoProfile({ label: 'Email', value: 'sitinurmala@gmail.com' })}
                  {InfoProfile({ label: 'Address', value: 'Jl. Suropati Timur' })}
                  {InfoProfile({ label: 'Gender', value: 'Female' })}
                  {InfoProfile({ label: 'NIP', value: '28920239' })}
                  {InfoProfile({ label: 'Office', value: 'Baron Ofc1' })}
                </View>
                <Link href="/signin">signIn</Link>
                <Link href="/notification">Notification</Link>
            </ScrollView>
            <View style={{
                paddingHorizontal: 20,
                alignItems: "center",
                columnGap: 10,
                paddingVertical: 10,
                paddingBottom: 20,
                gap: 10
            }}>
                <Button text="Change Password" style={{width: "100%"}}/>
                <Button text="Logout" type="dark" style={{width: "100%"}}/>
            </View>
        </SafeAreaView>
    )
}

const InfoProfile = ({ label, value }) => {
    return (
        <View style={styles.infoBox}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.Value}>{value}</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 20,
        
      },
    profileHeader: {
      marginTop: 20,
      alignItems: 'center',
      marginBottom: 30,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    Title: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 10,
      color: '#111827',
    },
    editButton: {
      backgroundColor: '#000',
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 16,
      marginTop: 8,
    },
    infoBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 12,
      paddingHorizontal: 26,
      paddingVertical: 15,
      marginTop: 15,
      shadowColor: "rgba(4, 35, 129, 0.43)",
      elevation: 10,
    },
    label: {
      fontSize: 13,
      color: '#101828',
      marginBottom: 4,
    },
    Value: {
      fontSize: 13,
      color: '#6A7282',
      marginBottom: 4,
    },
}

export default Profile