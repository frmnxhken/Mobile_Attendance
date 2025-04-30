import React from "react";
import { View, Text, Image } from "react-native";
import Colors from "../../constants/Colors";

const HeaderProfile = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg" }}
                style={{
                    width: 46,
                    height: 46,
                    resizeMode: "cover",
                    borderRadius: "100%"
                }}
            />
            <View style={{
                marginLeft: "10px"
            }}>
                <Text style={{
                    fontSize: "10px",
                    color: Colors.gray
                }}>Welcome Back!</Text>
                <Text style={{
                    fontSize: "16px",
                    fontFamily: "Inter-Semibold"
                }}>Karina</Text>
            </View>
        </View>
    )
}

export default HeaderProfile