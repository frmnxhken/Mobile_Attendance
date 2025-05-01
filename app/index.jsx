import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderProfile from "../components/ui/HeaderProfile";
import CalendarSlide from "../components/home/CalendarSlide";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Sizes from "../constants/Sizes";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import ListItem from "../components/ui/ListItem";


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
                    paddingBottom: 40
                }}>
                    <View style={{
                        marginTop: 10,
                        marginBottom: 30
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
                                    key={index}
                                    label={today.label}
                                    value={today.value}
                                    icon={today.icon}
                                    color={today.color}
                                />
                            ))}
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                fontSize: Sizes.title,
                                fontFamily: "Inter-SemiBold"
                            }}>Attendance Recent</Text>
                            <Link href="/history" style={{
                                color: Colors.gray,
                                fontSize: Sizes.action,
                                fontFamily: "Inter-Regular"
                            }}>View All</Link>
                        </View>
                        <View style={{
                            flex: 1,
                            rowGap: 15,
                            marginTop: 15
                        }}>
                            {[1,2,3,4,5].map((_, index) => (
                                <ListItem
                                    key={index}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                columnGap: 10,
                paddingVertical: 10,
                paddingHorizontal: 15
            }}>
                <Button text="Excused" type="dark" style={{width: "48%"}}/>
                <Button text="Checkin" style={{width: "48%"}}/>
            </View>
        </SafeAreaView>
    )
}
