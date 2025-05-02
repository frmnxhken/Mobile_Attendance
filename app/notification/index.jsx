import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderBar from "../../components/ui/HeaderBar";

const Notification = () => {
    return (
        <SafeAreaView>
            <View>
                <HeaderBar name="Notification"/>
                <Text>Notification Page</Text>
            </View>
        </SafeAreaView>
    )
}

export default Notification