import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { router } from "expo-router";
import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

interface BasicInputProps {
  placeholder: string;
  isPassword: boolean;
}
interface TouchInputProps {
  placeholder: string;
  isPassword: boolean;
  handlePress: string;
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

export function DescriptionInput(props: BasicInputProps) {
  const { placeholder, isPassword } = props;
  const [text, setText] = useState("");
  return (
    <>
      <TextInput
        style={input.description}
        placeholder={placeholder}
        placeholderTextColor={Colors.mute}
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        textAlignVertical="top"
        secureTextEntry={isPassword}
        multiline={true}
        numberOfLines={4}
      ></TextInput>
    </>
  );
}

export function TouchInput(props: TouchInputProps) {
  const { placeholder, isPassword, handlePress } = props;
  return (
    <>
      <TextInput
        // style={styles.subTitle1}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      ></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.text,
  },
});

const input = StyleSheet.create({
  normal: {
    ...text.mainContent,
    textAlign: "left",
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 50,
    paddingLeft: 20,
    alignSelf: "stretch",
  },
  description: {
    ...text.mainContent,
    textAlign: "left",
    paddingVertical: 10,
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.blue.text,
    paddingLeft: 20,
    alignSelf: "stretch",
  },
});
