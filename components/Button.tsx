import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { defaultStyles, text } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

interface ButtonProps {
  backgroundColor: string;
  title: string;
}

export default function Button(props: ButtonProps) {
  const { backgroundColor, title } = props;
  return (
    <TouchableOpacity style={[buttonStyle.container, { backgroundColor }]}>
      <Text style={text.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function StretchButton(props: HrefButtonProps) {
  const { backgroundColor, title, href } = props;
  return (
    <TouchableOpacity
      style={[buttonStyle.stretchContainer, { backgroundColor }]}
      onPress={() => {
        router.replace(href);
      }}
    >
      <Text style={{ ...text.mainContent, color: Colors.blue.text }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

interface HrefButtonProps {
  backgroundColor: string;
  title: string;
  href: string;
}
export function HrefButton(props: HrefButtonProps) {
  const { backgroundColor, title, href } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        router.replace(href);
      }}
      style={[buttonStyle.container, { backgroundColor }]}
    >
      <Text style={text.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const buttonStyle = StyleSheet.create({
  container: {
    ...defaultStyles.btn,
    borderWidth: 3,
    borderColor: Colors.black,
    minHeight: 48,
    paddingHorizontal: 20,
    minWidth: 115,
  },
  stretchContainer: {
    ...defaultStyles.btn,
    borderColor: Colors.black,
    minHeight: 48,
    paddingHorizontal: 20,
    minWidth: 115,
    flex: 1,
  },
});
