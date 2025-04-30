import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderProfile from "../components/ui/HeaderProfile";
import { Link } from "expo-router";

export default function Home() {
    return (
        <SafeAreaView style={{
            paddingHorizontal: 15,
            paddingVertical: 20
        }}>
            <ScrollView>
                <HeaderProfile/>
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
                <Link href="/signin">Ke Login</Link>
            </ScrollView>
        </SafeAreaView>
    )
}
