import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black }}>
      <Stack.Screen name="cerSuggest" options={{ headerShown: false }} />
      <Stack.Screen name="aimsSuggest" options={{ headerShown: false }} />
      <Stack.Screen name="testSuggest" options={{ headerShown: false }} />
    </Stack>
  );
}
