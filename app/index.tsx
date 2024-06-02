import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";

// Disable Auto Hide Loading Screen
SplashScreen.preventAutoHideAsync();

export default function IndexScreen() {
  // I.Model:

  // 1.Create Roboto Font
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  // 2.Create Opacity Value
  const opacity = useSharedValue(0);
  const [showLogo, setShowLogo] = useState(true);
  const [showSlogan, setShowSlogan] = useState(false);

  // II.V-Model

  // 1. Load Roboto Font
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  // 2. Load Animation
  useEffect(() => {
    const showLogoTimeout = setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 1000, //2000
        easing: Easing.inOut(Easing.ease),
      });

      setTimeout(() => {
        setShowSlogan(true);
        opacity.value = withTiming(0, {
          duration: 1000, //200
          easing: Easing.inOut(Easing.ease),
        });

        setTimeout(() => {
          router.replace("recommendation/suggest-first");
        }, 1000); // Thời gian chờ trước khi chuyển hướng (ví dụ: 2000ms) //2000
      }, 2000); // Thời gian hiển thị logo (ví dụ: 4000ms) //4000
    });

    return () => clearTimeout(showLogoTimeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // View
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={defaultStyles.pageContainer} onLayout={onLayoutRootView}>
      {/* container */}
      <View style={index.container}>
        {/* Logo */}
        <Animated.View style={[logo.container, animatedStyle]}>
          <FlaticonIcon
            size={160}
            uri={"https://cdn-icons-png.flaticon.com/512/3069/3069172.png"}
          />
          <Text style={logo.text}>Duokoala</Text>
        </Animated.View>

        {/* Slogan */}
        <Animated.View style={[index.slogan, animatedStyle]}>
          <Text style={text.subTitle}>Unlock Your English Potential</Text>
          <Text style={text.mainContent}>
            Khai Phá Tiềm Năng Tiếng Anh Của Bạn
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

export const index = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  slogan: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export const logo = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.black,
  },
});
