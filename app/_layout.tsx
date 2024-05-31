import Colors from "@/constants/Colors";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { index } from ".";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_Black: require("@/assets/fonts/Roboto/Roboto-Black.ttf"),
    Roboto_BlackItalic: require("@/assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
    Roboto_Bold: require("@/assets/fonts/Roboto/Roboto-Bold.ttf"),
    Roboto_BoldItalic: require("@/assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    Roboto_Italic: require("@/assets/fonts/Roboto/Roboto-Italic.ttf"),
    Roboto_Light: require("@/assets/fonts/Roboto/Roboto-Light.ttf"),
    Roboto_LightItalic: require("@/assets/fonts/Roboto/Roboto-LightItalic.ttf"),
    Roboto_Medium: require("@/assets/fonts/Roboto/Roboto-Medium.ttf"),
    Roboto_MediumItalic: require("@/assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    Roboto_Regular: require("@/assets/fonts/Roboto/Roboto-Regular.ttf"),
    Roboto_Thin: require("@/assets/fonts/Roboto/Roboto-Thin.ttf"),
    Roboto_ThinItalic: require("@/assets/fonts/Roboto/Roboto-ThinItalic.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        statusBarColor: Colors.black,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
