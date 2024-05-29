import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
