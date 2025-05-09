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
import { getAttendanceRecent } from "@/services/HistoryService";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
    const router = useRouter();
    const { user } = useAuth();
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
                <HeaderProfile
                    name={user.name}
                    photo={user.photo}
                />
                <CalendarSlide/>
                <View style={styles.sectionSpace}>
                    <View>
                        <Text style={styles.headerTitle}>Today Attendance</Text>
                        <View style={styles.statisticContainer}>
                            <Card label="Start Shift" 
                                value={data?.statistic?.checkin ? data?.statistic?.checkin : "-- : --"} 
                                icon="checkin" color="lightGreen" />
                            <Card label="End Shift" 
                                value={data?.statistic?.checkout ? data?.statistic?.checkout : "-- : --"} 
                                icon="checkout" color="pink" />
                            <Card label="Balance" value={data?.statistic?.balance} icon="clock" color="yellow" />
                            <Card label="Total Attended" value={data?.statistic?.attended} icon="calendar" color="lightBlue" />
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