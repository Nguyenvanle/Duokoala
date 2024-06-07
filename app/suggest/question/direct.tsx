import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { index } from "@/app/index";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import Button, { HrefButton } from "@/components/Button";
import { overflowLogo, suggest } from "../certificate";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/10211/10211870.png";

export default function SuggestFirst() {
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <View style={overSuggest.container}>
        <View style={{ paddingVertical: 100 }}>
          <FlaticonIcon uri={imageUri} size={300} />
          <View style={suggest.subFrame}>
            <View style={suggest.contentFrame}>
              <Text style={text.title}>Đánh giá năng lực</Text>
            </View>
          </View>

          <View style={suggest.subFrame}>
            <View style={suggest.contentFrame}>
              <Text style={text.mainContent}>
                Có lẽ chúng ta nên làm bài kiểm tra nhỏ đánh giá năng lực của
                bạn
              </Text>
            </View>
          </View>
        </View>
        <View style={overSuggest.decide}>
          <HrefButton
            backgroundColor={Colors.red}
            title="Từ chối"
            href="/suggest/question/text-question"
          />
          <HrefButton
            backgroundColor={Colors.blue.regular}
            title="Đồng ý"
            href="/suggest/question/text-question"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export const overSuggest = StyleSheet.create({
  container: {
    ...suggest.container,
    alignItems: "center",
    justifyContent: "space-between",
  },
  decide: {
    ...suggest.decide,
    flex: 0,
    justifyContent: "flex-end",
    paddingTop: 15,
    gap: 15,
  },
});

export const justify = StyleSheet.create({
  justifyIcon: {
    paddingLeft: 60,
    justifyContent: "center",
  },
});
