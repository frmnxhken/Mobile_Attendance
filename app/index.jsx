import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderProfile from "../components/ui/HeaderProfile";
import CalendarSlide from "../components/home/CalendarSlide";
import Card from "../components/ui/Card";
import Sizes from "../constants/Sizes";


export default function Home() {
    const todayAttendances = [
        {
            "label": "Start Shift",
            "value": "09:00",
            "icon": "checkin",
            "color": "lightGreen"
        },
        {
            "label": "End Shift",
            "value": "15:00",
            "icon": "checkout",
            "color": "pink"
        },
        {
            "label": "Time Off",
            "value": "54%",
            "icon": "clock",
            "color": "yellow"
        },
        {
            "label": "Total Attended",
            "value": "12 Days",
            "icon": "calendar",
            "color": "lightBlue"
        },
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
                            {todayAttendances.map((today, index) => (
                                <Card
                                    label={today.label}
                                    value={today.value}
                                    icon={today.icon}
                                    color={today.color}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
