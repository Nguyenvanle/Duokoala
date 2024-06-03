import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="direct" options={{ headerShown: false }} />
      <Stack.Screen name="text-question" options={{ headerShown: false }} />
      <Stack.Screen name="picture-question" options={{ headerShown: false }} />
    </Stack>
  );
}
