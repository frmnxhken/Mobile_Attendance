import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderBar from "@/components/ui/HeaderBar";
import NoNotif from "../../assets/Icons/NoNotif";
import Button from "../../components/ui/Button";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

const Notification = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <HeaderBar name="Notification"/>
            <View style={styles.container}>
                <NoNotif/>
                <View style={styles.wrapText}>
                    <Text style={styles.Title}>You have no notifications at this time</Text>
                    <Text style={styles.Description}>If you would like to check for new messages, please tap the 'Reload' button below</Text> 
                </View>
                <Button text="Reload"/>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        
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