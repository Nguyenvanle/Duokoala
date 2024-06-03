import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { StyleSheet, Text, View } from "react-native";
import useIndexScreenViewModel from "@/screens/index/v-model";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import Colors from "@/constants/Colors";

const iconUri: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";
const routerHref: string = "/suggest/";

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
      <View style={index.container}>
        {/* Logo */}
        <Animated.View style={[logo.container, animatedStyle]}>
          <FlaticonIcon size={160} uri={iconUri} />
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
