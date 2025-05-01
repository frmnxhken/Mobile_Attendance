import React from 'react';
import { View, Text } from 'react-native';
import Sizes from '../../constants/Sizes';
import Colors from '../../constants/Colors';

import InGreenIcon from "../../assets/Icons/InGreenIcon";
import OutRedIcon from "../../assets/Icons/OutRedIcon";
import ClockYellowIcon from "../../assets/Icons/ClockYellowIcon";
import CalendarBlueIcon from "../../assets/Icons/CalendarBlueIcon";
import CheckGreenIcon from "../../assets/Icons/CheckGreenIcon";
import ClockBlueIcon from "../../assets/Icons/ClockBlueIcon";
import EnvelopeYellowIcon from "../../assets/Icons/EnvelopeYellowIcon";
import DangerIcon from "../../assets/Icons/DangerIcon";

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
        <View style={{
            width: "48%",
            backgroundColor: "white",
            borderRadius: 12,
            shadowColor: "#6F80B2",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 13,
            elevation: 13,
        }}>
            <View style={{
                paddingTop: 15,
                paddingBottom: 20,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View>
                    <Text style={{
                        fontSize: Sizes.title,
                        fontFamily: "Inter-SemiBold"
                    }}>{props.value}</Text>
                    <Text style={{
                        fontSize: Sizes.action,
                        fontFamily: "Inter-Regular",
                        color: Colors.gray,
                        marginTop: 10
                    }}>{props.label}</Text>
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

export default Card