import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import InfoBar from "@/components/attendance/InfoBar";
import PermissionNotification from "@/components/attendance/PermissionNotification";

import { formatToDayMonth } from "@/utils/dateHelpers";
import CameraPermission from "@/assets/Icons/CameraPermission";
import LocationPermission from "@/assets/Icons/LocationPermission";
import useHandleAttendance from "@/hooks/useHandleAttendance";

const Presention = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const {
    locationPermission,
    location,
    attendance,
    distance,
    dateTime,
    handleAttendance,
    cameraRef,
  } = useHandleAttendance();

  if (!permission?.granted) {
    return (
      <PermissionNotification
        type="Camera"
        icon={<CameraPermission />}
        request={requestPermission}
        onGranted={() => {
          setPermission({ granted: true });
        }}
      />
    );
  }

  if (locationPermission !== "granted") {
    return (
      <PermissionNotification
        type="Location"
        icon={<LocationPermission />}
        request={Location.requestForegroundPermissionsAsync}
        onGranted={() => {
          setPermission({ granted: true });
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderBar
          name="Attendance"
        />
        <CameraView style={styles.camera} facing={"front"} ref={cameraRef}>
          <View style={styles.overlay}>
            <Text style={styles.coords}>
              {location
                ? `Latitude: ${location.latitude.toFixed(5)}, Longitude: ${location.longitude.toFixed(5)}`
                : "Getting location..."}
            </Text>
          </View>
        </CameraView>
        <InfoBar
          distance={
            location ?
              distance + " km" : "calc.."
          }
          time={dateTime.time}
          date={formatToDayMonth(dateTime.today)}
        />
        {attendance === "checkin" && (
          <Button text="Check In" onPress={() => handleAttendance("checkin")} />
        )}
        {attendance === "checkout" && (
          <Button text="Check Out" type="dark" onPress={() => handleAttendance("checkout")} />
        )}
        {attendance === "done" && (
          <Button text="Already Checked Out" type="secondary" disabled />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 15,
  },
  camera: {
    height: "75%",
    borderRadius: 15,
    marginTop: 15
  },
  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    padding: 15
  },
  coords: {
    color: "white",
    fontSize: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
    borderRadius: 8,
  }
});

export default Presention;