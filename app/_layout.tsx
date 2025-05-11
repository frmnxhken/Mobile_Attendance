import { useFonts } from "expo-font";
import { Stack, useRouter, usePathname } from "expo-router";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const publicPaths = [
    "/signin",
    "/forgotPass",
    "/splash/SuccessSplash"
  ];

  useEffect(() => {
    const isPublic = publicPaths.some((path) => pathname.startsWith(path));
      if (isAuthenticated === false && !isPublic) {
        router.replace("/signin");
      }
  }, [isAuthenticated, pathname]);

  if (isAuthenticated === null) return null;

  return (
    <>
      <StatusBar hidden={false} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="presention/index" options={{ headerShown: false }} />
        <Stack.Screen name="signin/index" options={{ headerShown: false }} />
        <Stack.Screen name="history/index" options={{ headerShown: false }} />
        <Stack.Screen name="profile/index" options={{ headerShown: false }} />
        <Stack.Screen name="profile/edit" options={{ headerShown: false }} />
        <Stack.Screen name="notification/index" options={{ headerShown: false }} />
        <Stack.Screen name="notification/message" options={{ headerShown: false }} />
        <Stack.Screen name="forgotPass/index" options={{ headerShown: false }} />
        <Stack.Screen name="leave/index" options={{ headerShown: false }} />
        <Stack.Screen name="changePass/index" options={{ headerShown: false }} />
        <Stack.Screen name="splash/SuccessSplash" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <ProtectedLayout />
    </AuthProvider>
  );
}