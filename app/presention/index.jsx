import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import InfoBar from "@/components/attendance/InfoBar";
import PermissionNotification from "@/components/attendance/PermissionNotification";

import { postCheckIn, postCheckOut, getCheckStatus } from "@/services/AttendanceService";
import { haversineDistance } from "@/utils/geoHelpers";
import { getDateTime, formatToDayMonth } from "@/utils/dateHelpers";

import CameraPermission from "@/assets/Icons/CameraPermission";
import { useRouter } from "expo-router";
import LocationPermission from "@/assets/Icons/LocationPermission";

const Presention = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [locationPermission, setLocationPermission] = useState(null);
  const router = useRouter();
  const [location, setLocation] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [office, setOffice] = useState({
    lat: null, long: null
  });
  const cameraRef = useRef(null);
  const dateTime = getDateTime();
  const distance = haversineDistance(
    {
      "latitude": location?.latitude?.toFixed(5),
      "longitude": location?.longitude?.toFixed(5)
    },
    {
      "latitude": office?.lat,
      "longitude": office?.long
    }).toFixed(2);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status);
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
        setOffice({lat: response.data.office_lat, long: response.data.office_long});
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

      return router.push({
        pathname: "/splash/SuccessSplash",
        params: { type: "formSubmission" }
      });
    } catch (e) {
      return;
    }
  }

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