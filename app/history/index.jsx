import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderBar from "../../components/ui/HeaderBar";
import Card from "../../components/ui/Card";

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
            <ScrollView style={{
                paddingHorizontal: 15
            }}>
                <HeaderBar/>
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default History