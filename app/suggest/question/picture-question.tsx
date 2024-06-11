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
  "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg";
export default function PictureQuestion() {
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <View style={suggest.container}>
        <View style={overflowLogo.container}>
          <FlaticonIcon uri={imageUri} size={320} />
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Question 17</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Choose the best description for the image:
            </Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>
              They're reading the newspaper
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>They're leaving the room</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[suggest.option, { backgroundColor: Colors.blue.deep }]}
          >
            <Text style={[suggest.optionText, { color: Colors.milk }]}>
              They're standing near the table
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>
              They're turning on the machine
            </Text>
          </TouchableOpacity>
        </View>

        <View style={suggest.decide}>
          <HrefButton
            backgroundColor={Colors.red}
            title="Bỏ qua"
            href="/tabs"
          />
          <HrefButton
            backgroundColor={Colors.blue.regular}
            title="Tiếp tục"
            href="/tabs"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
