import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderProfile from "../components/ui/HeaderProfile";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import CalendarSlide from "../components/home/CalendarSlide";

export default function Home() {
    const calendar = [
        {}
    ]
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingVertical: 20,
            backgroundColor: "#fff",
        }}>
            <ScrollView>
                <View style={{
                    paddingHorizontal: 15,
                }}>
                    <HeaderProfile/>
                </View>
                <CalendarSlide/>
                <View style={{
                    paddingHorizontal: 15,
                }}>
                    <View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
