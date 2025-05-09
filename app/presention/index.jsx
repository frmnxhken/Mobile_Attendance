import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Notification from "@/components/screens/Notification";
import InfoBar from "@/components/attendance/InfoBar";

import { useAuth } from "@/contexts/AuthContext";
import { postCheckIn, postCheckOut, getCheckStatus } from "@/services/AttendanceService";
import { haversineDistance } from "@/utils/GeoHelpers";
import { getDateTime, formatToDayMonth } from "@/utils/dateHelpers";

import CameraPermission from "@/assets/Icons/CameraPermission";

const Presention = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const { user } = useAuth();
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

  const handleAttendance = async (type) => {
    if (!cameraRef || !location) return;
    const photo = await cameraRef.current.takePictureAsync();

    const payload = {
      uri: photo.uri,
      time: dateTime.time,
      date: dateTime.today,
      lat: location.latitude.toFixed(5),
      long: location.longitude.toFixed(5),
    };

    try {
      if (type === "checkin") {
        await postCheckIn(payload);
      } else {
        await postCheckOut(payload);
      }
      const response = await getCheckStatus();
      setAttendance(response.data.attendance);
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
        <InfoBar
          distance={
            location ? 
            haversineDistance(
            {"latitude": location?.latitude?.toFixed(5), 
            "longitude": location?.longitude?.toFixed(5)},
            {"latitude": user?.office_lat,
            "longitude": user?.office_long}).toFixed(2) + " km" : "calc.."
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
  }
});

export default Presention;