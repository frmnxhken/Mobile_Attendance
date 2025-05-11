import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Alert = ({ type = "info", message }) => {
    const icons = {
        success: "checkmark-circle",
        danger: "close-circle",
    }

    const types = {
        success: Colors.green,
        danger: Colors.red,
    }

    return (
        <View style={[styles.container, { backgroundColor: `${types[type]}10`, borderLeftColor: types[type] }]}>
            <Ionicons name={icons[type]} size={18} color={types[type]} style={styles.icon} />
            <Text style={[styles.text, { color: types[type] }]}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
    },
    text: {
        fontSize: 14,
        flex: 1,
    }
});

export default Alert;
