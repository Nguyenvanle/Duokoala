import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { suggest } from "./certificate";
import { overSuggest } from "./question/direct";
import useIndexScreenViewModel from "@/screens/index/v-model";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/3352/3352717.png";

const routerHref: string = "/tabs";

export default function SuggestFirst() {
  const { opacity } = useIndexScreenViewModel(routerHref);
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
      <Animated.View
        style={[
          overSuggest.container,
          { justifyContent: "center" },
          animatedStyle,
        ]}
      >
        <FlaticonIcon uri={imageUri} size={250} />
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Tìm kiếm khóa học</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Đợi xíu nhé, tớ đang tìm kiếm những khóa học phù hợp cho cậu
            </Text>
          </View>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}
