import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Card from "@/components/ui/Card";
import HeaderBar from "@/components/ui/HeaderBar";
import ListItem from "@/components/ui/ListItem";

import Sizes from "@/constants/Sizes";
import { attendances } from "@/constants/Data";

const History = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <View style={{
                    paddingHorizontal: 15,
                    paddingBottom: 40,
                }}>
                    <HeaderBar 
                        name="History Attendance"
                    />
                    <View style={styles.statisticContainer}>
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
                    <View style={{marginTop: 30}}>
                        <Text style={styles.headerTitle}>Attendances</Text>
                        <View style={styles.attendanceContainer}>
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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff"
    },
    statisticContainer: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        columnGap: 10,
        rowGap: 20,
        marginTop: 15
    },
    headerTitle: {
        fontSize: Sizes.title,
        fontFamily: "Inter-SemiBold"
    },
    attendanceContainer: {
        marginTop: 15,
        flex: 1,
        rowGap: 15
    }
});

export default History;