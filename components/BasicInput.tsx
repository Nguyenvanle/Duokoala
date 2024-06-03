import Colors from "@/constants/Colors";
import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface BasicInputProps {
  placeholder: string;
  isPassword: boolean;
}

export function BasicInput(props: BasicInputProps) {
  const { placeholder, isPassword } = props;
  const [text, setText] = useState("");
  return (
    <>
      <TextInput
        style={input.normal}
        placeholder={placeholder}
        placeholderTextColor={Colors.mute}
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        secureTextEntry={isPassword}
      ></TextInput>
    </>
  );
}
const input = StyleSheet.create({
  normal: {
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 50,
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 20,
    alignSelf: "stretch",
  },
});
