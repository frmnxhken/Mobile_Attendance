import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { getWeeklyRange } from "@/utils/dateHelpers";
import { formattedDates } from "@/utils/dateHelpers";
import { getHollidays } from "@/services/HollidayService";

const CalendarSlide = () => {
    const weekData = getWeeklyRange();
    const weekFormatted = formattedDates(weekData);
    const [hollidays, setHollidays] = useState(null);

    useEffect(() => {
        getHollidays().then(response => {
            setHollidays(response.data)
        })
    }, [])

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 20,
            }}
            style={{
                paddingHorizontal: 15,
                paddingVertical: 20,
            }}
        >
            <View style={styles.container}>
                {weekData.map((data, index) => {
                    const dateFormatted = weekFormatted[index];
                    const isHoliday = hollidays?.some(h => h.date === dateFormatted);
                    const backgroundColor = isHoliday
                        ? Colors.red 
                        : data.active
                            ? Colors.green 
                            : "#fff";      

                    const textColor = isHoliday || data.active ? "#fff" : "#000";
                    const subTextColor = isHoliday || data.active ? "#fff" : Colors.gray;

                    return (
                        <View key={index} style={[styles.card, { backgroundColor }]}>
                            <Text style={[styles.titleText, { color: textColor }]}>{data.date}</Text>
                            <Text style={[styles.actionText, { color: subTextColor }]}>{data.day}</Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        columnGap: 10
    },
    card: {
        width: 58,
        height: 58,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        aspectRatio: 1,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: Sizes.title,
        fontFamily: "Inter-SemiBold"
    },
    actionText: {
        fontSize: Sizes.action,
        fontFamily: "Inter-Regular"
    }
});

export default CalendarSlide;