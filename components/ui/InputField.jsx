import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const InputField = (props) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor={Colors.gray}
                secureTextEntry={false}
                keyboardType="default"
                autoCapitalize="none"
                value=""
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: Sizes.body,
        marginBottom: 10
    },
    input: {
        fontSize: Sizes.body,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 13
    },
});

export default InputField;