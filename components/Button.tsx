import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { defaultStyles, text } from "@/constants/Styles";
import Colors from "@/constants/Colors";

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

const buttonStyle = StyleSheet.create({
  container: {
    ...defaultStyles.btn,
    borderWidth: 3,
    borderColor: Colors.black,
  },
});
