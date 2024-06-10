import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        statusBarColor: Colors.black,
        headerStyle: { backgroundColor: Colors.blue.light },
      }}
    >
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="confirm" options={{ headerShown: true, title: "" }} />
      <Stack.Screen name="intro" options={{ headerShown: false }} />
    </Stack>
  );
}
