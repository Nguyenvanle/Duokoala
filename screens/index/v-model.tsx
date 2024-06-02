// screens/IndexScreen/IndexScreenViewModel.ts
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { router } from "expo-router";
import IndexScreenModel from "@/screens/index/model";

const useIndexScreenViewModel = (routerHref: string): IndexScreenModel => {
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
    const showLogoDuration = 1000;
    const redirectDuration = 500;
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
