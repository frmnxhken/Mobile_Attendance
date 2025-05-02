import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar"

import Sizes from "@/constants/Sizes";

import FlagGrayIcon from "@/assets/Icons/FlagGrayIcon";
import ClockGrayIcon from "@/assets/Icons/ClockGrayIcon";
import CalendarGrayIcon from "@/assets/Icons/CalendarGrayIcon";

const Presention = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      }
    })();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button text="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderBar
          name="Attendance"
        />
        <CameraView style={styles.camera} facing={"front"}>
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
            <Text>0.2km</Text>
          </View>
          <View style={styles.informationItem}>
            <ClockGrayIcon />
            <Text>08:53</Text>
          </View>
          <View style={styles.informationItem}>
            <CalendarGrayIcon />
            <Text>30 April</Text>
          </View>
        </View>
        <Button text="Checkin" />
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