import { defaultStyles, text } from "@/constants/Styles";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { FlaticonIcon } from "./FlaticonIcon";
import { koalaUri } from "./KoalaLoading";
import Colors from "@/constants/Colors";
import { transform } from "@babel/core";

interface CustomAlertProps {
  title: string;
  message: string;
  textButton: string;
  icon: string;
  isShow: boolean;
  handlerConfirm: () => void;
}

const CustomAlert = (props: CustomAlertProps) => {
  const { title, message, textButton, icon, handlerConfirm } = props;

  const customAlertView = (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          transform: [{ translateY: -45 }],
          padding: 5,
          borderRadius: 50,
          backgroundColor: Colors.blue.light,
        }}
      >
        <FlaticonIcon size={80} uri={props.icon}></FlaticonIcon>
      </View>
      <Text style={[text.title, { transform: [{ translateY: -20 }] }]}>
        {props.title}
      </Text>
      <Text style={[text.mainContent, { fontSize: 14 }]}>{props.message}</Text>

      {/* You can insert any component here */}
    </View>
  );
  const background = (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    ></ImageBackground>
  );

  return (
    <View>
      <AwesomeAlert
        show={props.isShow}
        showProgress={false}
        showConfirmButton={true}
        confirmText={props.textButton}
        confirmButtonTextStyle={text.btnText}
        confirmButtonColor={Colors.blue.deep}
        onConfirmPressed={props.handlerConfirm}
        customView={customAlertView}
        contentContainerStyle={container.alert}
        confirmButtonStyle={container.button}
      />
    </View>
  );
};

const container = StyleSheet.create({
  alert: {
    backgroundColor: "#A7F6FF",
    borderRadius: 15,
  },
  button: {
    ...text.btnText,
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default CustomAlert;
