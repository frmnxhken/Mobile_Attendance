import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderBar from "@/components/ui/HeaderBar";
import Button from "../../components/ui/Button";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import NoNotif from "../../assets/Icons/NoNotif"; // default icon

const Notification = ({
    header="Notification",
  title = "You have no notifications at this time",
  description = "If you would like to check for new messages, please tap the 'Reload' button below",
  buttonText = "Reload",
  icon = <NoNotif />,
  onPress = () => {},
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderBar name={header} />
      <View style={styles.container}>
        {icon}
        <View style={styles.wrapText}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Description}>{description}</Text>
        </View>
        <Button text={buttonText} onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  wrapText: {
    gap: 20,
    alignItems: "center",
  },
  Title: {
    fontSize: Sizes.title,
    fontWeight: "700",
    fontFamily: "Inter-SemiBold",
  },
  Description: {
    paddingHorizontal: 20,
    color: Colors.gray,
    fontSize: Sizes.action,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
};

export default Notification;
