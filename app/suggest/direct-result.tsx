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
import { suggest } from "./certificate";
import { justify, overSuggest } from "./question/direct";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/3352/3352717.png";

export default function SuggestFirst() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={overSuggest.container}>
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
      </View>
    </View>
  );
}
