import { getAuthToken } from "@/api/user.api";
import Colors from "@/constants/Colors";
import { auth } from "@/services/firebase";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ statusBarColor: Colors.black }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="suggest" options={{ headerShown: false }} />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
