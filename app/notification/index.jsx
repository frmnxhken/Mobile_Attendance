import React from "react";
import { useRouter } from "expo-router";
import Notification from "@/components/screens/Notification";

const NotificationScreen = () => {
const router = useRouter();
  return <Notification onPress={() => router.navigate("/notification/message")}/>;
};

export default NotificationScreen;

