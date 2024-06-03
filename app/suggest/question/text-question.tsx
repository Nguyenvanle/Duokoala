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
  "https://cdn-icons-png.flaticon.com/512/9888/9888830.png";
export default function TextQuestion() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={suggest.container}>
        <View style={overflowLogo.container}>
          <FlaticonIcon uri={imageUri} size={260} />
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Question 1</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Where do we go to watch a movie?
            </Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[suggest.option, { backgroundColor: Colors.brown }]}
          >
            <Text style={[suggest.optionText, { color: Colors.milk }]}>
              Cinema
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>School</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>Park</Text>
          </TouchableOpacity>
        </View>

        <View style={suggest.decide}>
          <HrefButton
            backgroundColor={Colors.red}
            title="Bỏ qua"
            href="/suggest/question/picture-question"
          />
          <HrefButton
            backgroundColor={Colors.blue.regular}
            title="Tiếp tục"
            href="/suggest/question/picture-question"
          />
        </View>
      </View>
    </View>
  );
}
