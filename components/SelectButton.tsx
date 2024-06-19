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
        <View style={container.left}>
          <FlaticonIcon size={28} uri={props.hrefIcon} />
          <Text style={text.subTitle}>{props.title}</Text>
        </View>
        <View>
          <FlaticonIcon
            size={35}
            uri={"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const container = StyleSheet.create({
  default: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginVertical: 10,
    padding: 2,
    paddingLeft: 5,
    paddingVertical: 3,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
