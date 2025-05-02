import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as Location from 'expo-location';
import { useRouter } from "expo-router";

const Presention = () => {
    const router = useRouter();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            router.navigate("/")
        }

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
    };

    useEffect(() => {
        getLocation();
    }, []);
    return (
        <SafeAreaView>
            <View>
                {location ? (
                    <Text>
                        Latitude: {location.coords.latitude}{'\n'}
                        Longitude: {location.coords.longitude}
                    </Text>
                ) : (
                    <Text>{errorMsg || 'Loading location...'}</Text>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Presention