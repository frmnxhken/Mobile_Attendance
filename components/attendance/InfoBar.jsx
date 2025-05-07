import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Sizes from "@/constants/Sizes";
import FlagGrayIcon from "@/assets/Icons/FlagGrayIcon";
import ClockGrayIcon from "@/assets/Icons/ClockGrayIcon";
import CalendarGrayIcon from "@/assets/Icons/CalendarGrayIcon";

const InfoBar = ({distance, time, date}) => {
    return (
        <View style={styles.informationContainer}>
            <View style={styles.informationItem}>
                <FlagGrayIcon />
                <Text style={styles.bodyText}>
                    {distance}
                </Text>
            </View>
            <View style={styles.informationItem}>
                <ClockGrayIcon />
                <Text style={styles.bodyText}>
                    {time}
                </Text>
            </View>
            <View style={styles.informationItem}>
                <CalendarGrayIcon />
                <Text style={styles.bodyText}>
                    {date}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    informationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    },
    informationItem: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 5
    },
    bodyText: {
        fontSize: Sizes.body,
        fontFamily: "Inter-Regular"
    }
});

export default InfoBar