import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import Feedback from "./Feedback";

const InputField = (props) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={[styles.input, props.style]}
                placeholder={props.placeholder}
                placeholderTextColor={Colors.gray}
                secureTextEntry={props.secure}
                keyboardType="default"
                autoCapitalize="none"
                value={props.value}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                onChangeText={props.onChangeText}
                textAlignVertical="top"
            />
            {props.feedback && <Feedback type="danger" message={props.feedback}/>}
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