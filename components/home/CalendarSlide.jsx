import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { weekData } from "@/constants/Data";

const CalendarSlide = () => {
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
                {weekData.map((data, index) => (
                    <View key={index} style={[styles.card, {
                        backgroundColor: data.active ? Colors.green : "#fff"
                    }]}>
                        <Text style={[styles.titleText,{
                            color: data.active ? "#fff" : "#000"
                        }]}>{data.date}</Text>
                        <Text style={[styles.actionText,{
                            color: data.active ? "#fff" : Colors.gray
                        }]}>{data.day}</Text>
                    </View>)
                )}
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