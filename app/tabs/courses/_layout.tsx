import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function CoursesLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="add-courses" options={{ headerShown: false }} />
    </Stack>
  );
}
