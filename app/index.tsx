import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles } from "@/constants/Styles";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={defaultStyles.pageContainer} onLayout={onLayoutRootView}>
      <View style={index.container}>
        <Text style={index.text}>Index Page</Text>
        <View style={index.logo}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <FlaticonIcon
            size={100}
            uri={"https://cdn-icons-png.flaticon.com/512/3069/3069172.png"}
          />
        </View>
      </View>
    </View>
  );
}

const index = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
  },
  logo: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
