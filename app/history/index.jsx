import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Card from "@/components/ui/Card";
import HeaderBar from "@/components/ui/HeaderBar";
import ListItem from "@/components/ui/ListItem";

import Sizes from "@/constants/Sizes";
import { getAttendanceHistory } from "@/services/HistoryService";

const History = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAttendanceHistory().then(response => {
            setData(response.data)
        }).finally(() => setLoading(false))
    }, []);

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
                    <Card label="Present" value={data?.statistic?.present} icon="checked" color="lightGreen" />
                        <Card label="Total late" value={data?.statistic?.late} icon="time" color="lightBlue" />
                        <Card label="Excused" value={data?.statistic?.excused} icon="envelope" color="yellow" />
                        <Card label="Total absent" value={data?.statistic?.absent} icon="danger" color="pink" />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.headerTitle}>Attendances</Text>
                        <View style={styles.attendanceContainer}>
                            {loading ? (
                                <Text>Loading...</Text>
                            ) : data?.histories?.length > 0 ? (
                                data.histories.map((history, index) => (
                                    <ListItem key={index} {...history} />
                                ))
                            ) : (
                                <Text>No attendance history found.</Text>
                            )}
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