import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Feedback = (props) => {
    const types = {
        success: Colors.green,
        danger: Colors.red
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.message, {
                color: types[props.type]
            }]
            }>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    message: {
        fontSize: Sizes.action
    }
});

export default Feedback