import { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import { useRouter } from "expo-router";

import { haversineDistance } from "@/utils/geoHelpers";
import { getDateTime } from "@/utils/dateHelpers";
import {
  postCheckIn,
  postCheckOut,
  getCheckStatus,
} from "@/services/AttendanceService";
import { Alert } from "react-native";

const useHandleAttendance = () => {
  const [locationPermission, setLocationPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [office, setOffice] = useState({ lat: null, long: null });

  const cameraRef = useRef(null);
  const dateTime = getDateTime();
  const router = useRouter();

  const distance = haversineDistance(
    {
      latitude: location?.latitude?.toFixed(5),
      longitude: location?.longitude?.toFixed(5),
    },
    {
      latitude: office?.lat,
      longitude: office?.long,
    }
  ).toFixed(2);

  // Get Location
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

  // Get Status
  useEffect(() => {
    (async () => {
      try {
        const res = await getCheckStatus();
        setAttendance(res.data.attendance);
        setOffice({ lat: res.data.office_lat, long: res.data.office_long });
      } catch (e) {
        console.warn("Failed to fetch attendance status", e);
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
    }

    const action = type === "checkin" ? postCheckIn : postCheckOut;
    const response = await action(payload);
    
    if (response.success) {
        router.push({
            pathname: "/splash/SuccessSplash",
            params: { type: "formSubmission" }
        });
    } else {
        Alert.alert("Info", response.message);
    }

    const status = await getCheckStatus();
    setAttendance(status.data.attendance);
  }

  return {
    locationPermission,
    location,
    attendance,
    office,
    distance,
    dateTime,
    handleAttendance,
    cameraRef,
  }
}

export default useHandleAttendance;
