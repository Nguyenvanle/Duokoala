// screens/IndexScreen/IndexScreenViewModel.ts
import IndexScreenModel from "@/screens/index/model";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

export const showLogoDuration = 0;
export const redirectDuration = 0;

const useIndexScreenViewModel = (routerHref: string): IndexScreenModel => {
  // Disable Auto Hide Loading Screen
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  const opacity = useSharedValue(0);

  // Load Roboto Font
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Load Animation
  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: redirectDuration,
      easing: Easing.inOut(Easing.ease),
    });

    setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: redirectDuration,
        easing: Easing.inOut(Easing.ease),
      });

      setTimeout(() => {
        router.replace(routerHref);
      }, redirectDuration); // Thời gian chờ trước khi chuyển hướng (ví dụ: 2000ms)
    }, showLogoDuration); // Thời gian hiển thị logo (ví dụ: 4000ms)
  }, []);

  return { fontsLoaded, opacity, onLayoutRootView };
};

export default useIndexScreenViewModel;
