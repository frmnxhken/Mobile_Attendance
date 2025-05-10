import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../../constants/Colors";

const Button = ({ text, type = "primary", onPress, disabled = false, style }) => {
    const isSecondary = type === "secondary";

    const backgroundColor = {
        primary: Colors.green,
        dark: Colors.black,
    }[type] || Colors.green;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
            style={{
                backgroundColor: isSecondary ? "transparent" : (disabled ? Colors.gray : backgroundColor),
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 10,
                alignItems: "center",
                borderWidth: isSecondary ? 1.3 : 0,
                borderColor: isSecondary ? Colors.black : "transparent",
                ...style,
            }}
        >
            <Text style={{
                color: isSecondary ? Colors.black : "#fff",
                fontWeight: "600",
                fontSize: 16,
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
