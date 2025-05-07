import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Notification from "@/components/screens/Notification";

import Sizes from "@/constants/Sizes";
import { postCheckIn, postCheckOut, getCheckStatus } from "@/services/AttendanceService";
import { getDateTime, formatToDayMonth } from "@/utils/dateHelpers";

import CameraPermission from "@/assets/Icons/CameraPermission";
import FlagGrayIcon from "@/assets/Icons/FlagGrayIcon";
import ClockGrayIcon from "@/assets/Icons/ClockGrayIcon";
import CalendarGrayIcon from "@/assets/Icons/CalendarGrayIcon";

const Presention = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const cameraRef = useRef(null);
  const dateTime = getDateTime();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCheckStatus();
        setAttendance(response.data.attendance);
      } catch (e) {
        return;
      }
    })();
  }, []);

  const handleCheckIn = async () => {
    if (!cameraRef) return;
    const photo = await cameraRef.current.takePictureAsync();
    try {
      const response = await postCheckIn({
        uri: photo.uri,
        checkin: dateTime.time,
        date: dateTime.today,
        lat: location.latitude.toFixed(5),
        long: location.longitude.toFixed(5),
      });
    } catch (e) {
      return;
    }
  }
  
  const handleCheckOut = async () => {
    if (!cameraRef) return;
    const photo = await cameraRef.current.takePictureAsync();
    try {
      const response = await postCheckOut({
        uri: photo.uri,
        checkout: dateTime.time,  
        date: dateTime.today,
        lat: location.latitude.toFixed(5),
        long: location.longitude.toFixed(5),
      });
    } catch (e) {
      return;
    }
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <Notification
        header="Attendance"
        title="Allow Camera Access"
        description="Camera access is needed to take a photo as proof of your attendance"
        buttonText="Grant Permission"
        icon={<CameraPermission />}
        onPress={requestPermission}
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
        <View style={styles.informationContainer}>
          <View style={styles.informationItem}>
            <FlagGrayIcon />
            <Text style={styles.bodyText}>0.2km</Text>
          </View>
          <View style={styles.informationItem}>
            <ClockGrayIcon />
            <Text style={styles.bodyText}>{dateTime.time}</Text>
          </View>
          <View style={styles.informationItem}>
            <CalendarGrayIcon />
            <Text style={styles.bodyText}>
              {formatToDayMonth(dateTime.today)}
            </Text>
          </View>
        </View>
        {attendance === "checkin" && (
          <Button text="Check In" onPress={handleCheckIn} />
        )}
        {attendance === "checkout" && (
          <Button text="Check Out" type="dark" onPress={handleCheckOut} />
        )}
        {attendance === "done" && (
          <Button text="Already Checked Out" disabled />
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
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15
  },
  informationItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5
  },
  bodyText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular"
  }
});

export default Presention;