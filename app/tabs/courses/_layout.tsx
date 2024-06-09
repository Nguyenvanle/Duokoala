import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function CoursesLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen
        name="courses-list"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="add-courses" options={{ headerShown: false }} />
    </Stack>
  );
}
