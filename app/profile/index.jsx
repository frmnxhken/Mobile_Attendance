import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import HeaderBar from "../../components/ui/HeaderBar";
import Button from "../../components/ui/Button";

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar name="Profile"/>
            <ScrollView>
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
            </ScrollView>
            <Button/>
            <Button/>
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
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        
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