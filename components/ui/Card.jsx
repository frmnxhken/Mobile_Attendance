import React from "react";
import { View, Text, StyleSheet } from "react-native";

import InGreenIcon from "@/assets/Icons/InGreenIcon";
import OutRedIcon from "@/assets/Icons/OutRedIcon";
import ClockYellowIcon from "@/assets/Icons/ClockYellowIcon";
import CalendarBlueIcon from "@/assets/Icons/CalendarBlueIcon";
import CheckGreenIcon from "@/assets/Icons/CheckGreenIcon";
import ClockBlueIcon from "@/assets/Icons/ClockBlueIcon";
import EnvelopeYellowIcon from "@/assets/Icons/EnvelopeYellowIcon";
import DangerIcon from "@/assets/Icons/DangerIcon";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Card = (props) => {
    const icons = {
        "checkin": InGreenIcon,
        "checkout": OutRedIcon,
        "clock": ClockYellowIcon,
        "calendar": CalendarBlueIcon,
        "checked": CheckGreenIcon,
        "time": ClockBlueIcon,
        "envelope": EnvelopeYellowIcon,
        "danger": DangerIcon
    }

    const IconComponent = icons[props.icon];

    return (
        <View style={styles.card}>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={styles.titleText}>{props.value}</Text>
                    <Text style={styles.actionText}>{props.label}</Text>
                </View>
                <View style={{
                    backgroundColor: Colors[props.color],
                    padding: 8,
                    borderRadius: 12,
                }}>

                    {IconComponent && <IconComponent />}

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "48%",
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 13,
    },
    cardContainer: {
        paddingTop: 15,
        paddingBottom: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: Sizes.title,
        fontFamily: "Inter-SemiBold"
    },
    actionText: {
        fontSize: Sizes.action,
        fontFamily: "Inter-Regular",
        color: Colors.gray,
        marginTop: 10
    }
});

export default Card