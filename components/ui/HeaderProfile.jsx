import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../constants/Colors";

import BellIcon from "../../assets/Icons/BellIcon";
import { Link } from "expo-router";

const HeaderProfile = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Link href="/profile">
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg" }}
                        style={{
                            width: 46,
                            height: 46,
                            resizeMode: "cover",
                            borderRadius: 100
                        }}
                    />
                </Link>
                <View style={{
                    marginLeft: 10
                }}>
                    <Text style={{
                        fontSize: 10,
                        color: Colors.gray
                    }}>Welcome Back!</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "Inter-Semibold"
                    }}>Karina</Text>
                </View>
            </View>
            <BellIcon/>
        </View>
    )
}

export default HeaderProfile