import React from "react";
import { useRouter } from "expo-router";
import Notification from "@/components/ui/Notification";

const NotificationScreen = () => {
const router = useRouter();
  return <Notification buttonText="Reload" onPress={() => router.navigate("/notification/message")}/>;
};

export default NotificationScreen;

