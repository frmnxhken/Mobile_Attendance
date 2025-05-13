import React, { useEffect, useRef } from "react";
import { Alert, Linking, AppState } from "react-native";
import Notification from "@/components/ui/Notification";

const openSettingsAlert = (type) => {
  Alert.alert(
    "Permission Required",
    `${type} permission is permanently denied. Please enable it from app settings.`,
    [
      { text: "Cancel", style: "cancel" },
      { text: "Open Settings", onPress: () => Linking.openSettings() },
    ]
  );
};

export default function PermissionNotification({ type, icon, request, onGranted }) {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        const { status } = await request();
        if (status === "granted") {
          onGranted?.();
        }
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, []);

  const title = `Allow ${type} Access`;
  const description =
    type === "Camera"
      ? "Camera access is needed to take a photo as proof of your attendance"
      : "Location access is needed to verify your distance from the office for attendance";

  return (
    <Notification
      header="Attendance"
      title={title}
      description={description}
      buttonText="Grant Permission"
      icon={icon}
      onPress={async () => {
        const { status, canAskAgain } = await request();
        if (status === "granted") {
          onGranted?.();
        } else if (!canAskAgain) {
          openSettingsAlert(type);
        }
      }}
    />
  );
}
