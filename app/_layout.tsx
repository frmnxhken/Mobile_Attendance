import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
  });
  return (
    <>
      <StatusBar hidden={false}/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="presention/index" options={{ headerShown: false}} />
        <Stack.Screen name="signin/index" options={{ headerShown: false}} />
        <Stack.Screen name="history/index" options={{ headerShown: false}} />
        <Stack.Screen name="profile/index" options={{ headerShown: false}} />
        <Stack.Screen name="notification/index" options={{ headerShown: false}} />
        <Stack.Screen name="notification/message" options={{ headerShown: false}} />
      </Stack>
    </>
  );
}
