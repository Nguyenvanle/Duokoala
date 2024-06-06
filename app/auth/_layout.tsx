import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="confirm" options={{ headerShown: false }} />
    </Stack>
  );
}
