import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="suggest" options={{ headerShown: false }} />
    </Stack>
  );
}
