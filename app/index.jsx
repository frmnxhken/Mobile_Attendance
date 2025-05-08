import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ListItem from "@/components/ui/ListItem";
import HeaderProfile from "@/components/ui/HeaderProfile";
import CalendarSlide from "@/components/home/CalendarSlide";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { todayAttendances } from "@/constants/Data";
import { getAttendanceRecent } from "@/services/HistoryService";

const Home = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAttendanceRecent().then(response => {
            setData(response.data)
        }).finally(() => setLoading(false));
    }, [])

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <HeaderProfile/>
                <CalendarSlide/>
                <View style={styles.sectionSpace}>
                    <View>
                        <Text style={styles.headerTitle}>Today Attendance</Text>
                        <View style={styles.statisticContainer}>
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
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Attendance Recent</Text>
                            <Link href="/history" style={styles.actionText}>View All</Link>
                        </View>
                        <View style={styles.recentContainer}>
                            {data?.histories?.map((history, index) => (
                                <ListItem
                                    key={index}
                                    {...history}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.CTAContainer}>
                <Button text="Excused" type="dark" onPress={() => router.navigate("/leave")} style={{width: "48%"}}/>
                <Button text="Checkin" onPress={() => router.navigate("/presention")} style={{width: "48%"}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff"
    },
    sectionSpace: {
        paddingHorizontal: 15,
        paddingBottom: 40,
        flexDirection: "column",
        rowGap: 30
    },
    headerTitle: {
        fontSize: Sizes.title,
        fontFamily: "Inter-SemiBold"
    },
    actionText: {
        color: Colors.gray,
        fontSize: Sizes.action,
        fontFamily: "Inter-Regular"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    recentContainer: {
        flex: 1,
        rowGap: 15,
        marginTop: 15
    },
    statisticContainer: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        columnGap: 10,
        rowGap: 20,
        marginTop: 15
    },
    CTAContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: 10,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
});


export default Home;