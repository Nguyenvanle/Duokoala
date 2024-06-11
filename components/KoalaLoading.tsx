import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles } from "@/constants/Styles";
import { ActivityIndicator, ImageBackground, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import Colors from "@/constants/Colors";
import useIndexScreenViewModel from "@/screens/index/v-model";

export const koalaUri: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";

export default function KoalaLoading() {
  const { opacity } = useIndexScreenViewModel("/tabs/homes");
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <FlaticonIcon size={160} uri={koalaUri} />
        <ActivityIndicator
          size={80}
          color={Colors.black}
          style={{ padding: 20 }}
        />
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
