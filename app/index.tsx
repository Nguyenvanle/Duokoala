import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import useIndexScreenViewModel from "@/screens/index/v-model";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import Colors from "@/constants/Colors";

export const koalaUri: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";
const routerHref: string = "./sign-in";

export default function IndexScreen() {
  const { fontsLoaded, opacity, onLayoutRootView } =
    useIndexScreenViewModel(routerHref);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={defaultStyles.pageContainer} onLayout={onLayoutRootView}>
      {/* container */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={index.container}
      >
        {/* Logo */}
        <Animated.View style={[logo.container, animatedStyle]}>
          <FlaticonIcon size={160} uri={koalaUri} />
          <Text style={logo.text}>Duokoala</Text>
        </Animated.View>

        {/* Slogan */}
        <Animated.View style={[index.slogan, animatedStyle]}>
          <Text style={text.subTitle}>Unlock Your English Potential</Text>
          <Text style={text.mainContent}>
            Khai Phá Tiềm Năng Tiếng Anh Của Bạn
          </Text>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

export const index = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: -1,
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
