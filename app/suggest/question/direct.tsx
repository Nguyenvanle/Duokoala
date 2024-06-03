import {
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
  "https://cdn-icons-png.flaticon.com/512/3240/3240831.png";

export default function SuggestFirst() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={overSuggest.container}>
        <View style={justify.justifyIcon}>
          <FlaticonIcon uri={imageUri} size={250} />
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Đánh giá năng lực</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Có lẽ chúng ta nên làm bài kiểm tra nhỏ đánh giá năng lực của bạn
            </Text>
          </View>
        </View>
        <View style={overSuggest.decide}>
          <HrefButton
            backgroundColor={Colors.red}
            title="Từ chối"
            href="/suggest/question/text-question"
          />
          <HrefButton
            backgroundColor={Colors.teal}
            title="Đồng ý"
            href="/suggest/question/text-question"
          />
        </View>
      </View>
    </View>
  );
}

export const overSuggest = StyleSheet.create({
  container: {
    ...suggest.container,
    alignItems: "center",
    justifyContent: "center",
  },
  decide: {
    ...suggest.decide,
    justifyContent: "center",
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
