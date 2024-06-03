import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
