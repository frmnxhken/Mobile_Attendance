import React from "react";
import { Image } from "react-native";
import { Text, View, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

export default function Home() {
    return (
        <SafeAreaView style={{
            paddingHorizontal: 15,
            paddingVertical: 20
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Aespa_Karina_2024_MMA_2.jpg"}}
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


            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: "24px",
                    fontWeight: "medium",
                }}>Hello World</Text>
            </View>
        </SafeAreaView>
    )
}
