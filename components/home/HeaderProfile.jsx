import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

import BellIcon from "@/assets/Icons/BellIcon";
import Colors from "@/constants/Colors";

const HeaderProfile = ({name, photo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Link href="/profile">
                    <Image
                        source={{ uri: photo }}
                        style={styles.avatar}
                    />
                </Link>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.actionText}>Welcome Back!</Text>
                    <Text style={styles.headerText}>{name}</Text>
                </View>
            </View>
            <Link href="/notification">
                <BellIcon/>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingHorizontal: 15
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 16,
        fontFamily: "Inter-Semibold"
    },
    actionText: {
        fontSize: 10,
        color: Colors.gray
    },
    avatar: {
        width: 46,
        height: 46,
        resizeMode: "cover",
        borderRadius: 100
    }
});

export default HeaderProfile;