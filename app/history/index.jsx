import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderBar from "../../components/ui/HeaderBar";
import Card from "../../components/ui/Card";
import Sizes from "../../constants/Sizes";
import ListItem from "../../components/ui/ListItem";

const History = () => {
    const attendances = [
        {
            "label": "Present",
            "value": "24",
            "icon": "checked",
            "color": "lightGreen"
        },
        {
            "label": "Total Late",
            "value": "03",
            "icon": "time",
            "color": "lightBlue"
        },
        {
            "label": "Total Excused",
            "value": "02",
            "icon": "envelope",
            "color": "yellow"
        },
        {
            "label": "Total Absent",
            "value": "01",
            "icon": "danger",
            "color": "pink"
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
                    paddingBottom: 40
                }}>
                    <HeaderBar 
                        name="History Attendance"
                    />
                    <View style={{
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        columnGap: 10,
                        rowGap: 20,
                        marginTop: 15
                    }}>
                        {attendances.map((attendance, index) => (
                            <Card
                                key={index}
                                label={attendance.label}
                                value={attendance.value}
                                icon={attendance.icon}
                                color={attendance.color}
                            />
                        ))}
                    </View>
                    <View style={{
                        marginTop: 30
                    }}>
                        <Text style={{
                            fontSize: Sizes.title,
                            fontFamily: "Inter-SemiBold"
                        }}>Attendances</Text>
                        <View style={{
                            marginTop: 15,
                            flex: 1,
                            rowGap: 15
                        }}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                                <ListItem
                                    key={index}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default History