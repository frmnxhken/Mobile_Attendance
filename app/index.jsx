import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderProfile from "../components/ui/HeaderProfile";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import CalendarSlide from "../components/home/CalendarSlide";

import InGreenIcon from "../assets/Icons/InGreenIcon";

export default function Home() {
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
                    <View style={{
                        marginTop: 10
                    }}>
                        <Text style={{
                            fontSize: Sizes.title,
                            fontFamily: "Inter-SemiBold"
                        }}>Today Attendance</Text>
                        <View style={{
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            columnGap: 10,
                            rowGap: 20,
                            marginTop: 15
                        }}>
                            {[1,2,3,4].map((_, index) => (
                                <View style={{
                                    width: "48%",
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                    shadowColor: "#6F80B2",
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 13,
                                    elevation: 13,
                                }}>
                                    <View style={{
                                        paddingTop: 15,
                                        paddingBottom: 20,
                                        paddingHorizontal: 15,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                }}>
                                        <View>
                                            <Text style={{
                                                fontSize: Sizes.title,
                                                fontFamily: "Inter-SemiBold"
                                            }}>09:00</Text>
                                            <Text style={{
                                                fontSize: Sizes.action,
                                                fontFamily: "Inter-Regular",
                                                color: Colors.gray,
                                                marginTop: 10
                                            }}>Start Shift</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: Colors.lightGreen,
                                            padding: 8,
                                            borderRadius: 12,
                                        }}> 
                                            <InGreenIcon/>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
