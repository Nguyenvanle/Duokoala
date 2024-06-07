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
import { overflowLogo, suggest } from "./certificate";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/1604/1604895.png";
export default function Score() {
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <View style={suggest.container}>
        <View style={overflowLogo.container}>
          <FlaticonIcon uri={imageUri} size={250} />
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Tiến thêm bước nữa!</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Bạn muốn đạt được bao nhiêu điểm?
            </Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <TouchableOpacity
            style={[suggest.option, { backgroundColor: Colors.blue.deep }]}
          >
            <Text style={[suggest.optionText, { color: Colors.milk }]}>
              900+ điểm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>750 điểm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>600 điểm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>450 điểm</Text>
          </TouchableOpacity>
        </View>

        <View style={suggest.decide}>
          <HrefButton
            backgroundColor={Colors.red}
            title="Bỏ qua"
            href="/suggest/question/direct"
          />
          <HrefButton
            backgroundColor={Colors.blue.regular}
            title="Tiếp tục"
            href="/suggest/question/direct"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
