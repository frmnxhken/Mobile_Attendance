import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import HeaderBar from "@/components/ui/HeaderBar";
import MessageCard from "../../components/ui/MessageCard";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Notification = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <HeaderBar name="Notification"/>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.Title}>Today</Text>
                    <MessageCard
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua."
                        time="09:00 AM"
                        badge={true}
                    />
                    <MessageCard
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua."
                        time="09:00 AM"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 15,
        
    },
    wrapText:{
        gap: 20,
        alignItems: "center",
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        fontSize: Sizes.title,
        fontFamily: "Inter-SemiBold",
      },
    Description: {
        paddingHorizontal: 20,
        color: Colors.gray,
        fontSize: Sizes.action,
        fontFamily: "Inter-Regular",
        textAlign: 'center',
      },
}

export default Notification