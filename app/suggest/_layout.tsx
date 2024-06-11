import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="certificate" options={{ headerShown: false }} />
      <Stack.Screen name="score" options={{ headerShown: false }} />
      <Stack.Screen name="question" options={{ headerShown: false }} />
    </Stack>
  );
}
