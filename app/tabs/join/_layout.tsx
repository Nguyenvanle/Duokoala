import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function JoinLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="join-courses" options={{ headerShown: false }} />
    </Stack>
  );
}
