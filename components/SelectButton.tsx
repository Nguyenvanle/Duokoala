import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { router } from "expo-router";
import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlaticonIcon } from "./FlaticonIcon";

interface SelectButtonProps {
  hrefIcon: string;
  title: string;
  onPress: () => void;
}

export function SelectButton(props: SelectButtonProps) {
  const { hrefIcon, title, onPress } = props;
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={container.default}>
        <View
          style={{
            backgroundColor: Colors.milk,
            padding: 5,
            borderRadius: 20,
          }}
        >
          <FlaticonIcon size={28} uri={props.hrefIcon} />
        </View>
        <View style={container.left}>
          <Text style={[text.subTitle, { color: Colors.brown }]}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const container = StyleSheet.create({
  default: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "stretch",
    marginVertical: 10,
    padding: 5,
    paddingLeft: 5,
    gap: 10,
    borderRadius: 10,
    backgroundColor: Colors.milk,
    borderWidth: 1,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
