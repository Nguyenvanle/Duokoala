import { defaultStyles, text } from "@/constants/Styles";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { FlaticonIcon } from "./FlaticonIcon";

import Colors from "@/constants/Colors";

interface CustomAlertProps {
  title: string;
  message: string;
  textButton: string;
  icon: string;
  isShow: boolean;
  handlerConfirm: () => void;
  color: string;
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
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText={props.textButton}
        confirmButtonTextStyle={text.btnText}
        confirmButtonColor={Colors.blue.deep}
        onConfirmPressed={props.handlerConfirm}
        customView={customAlertView}
        contentContainerStyle={container.alert}
        confirmButtonStyle={[
          container.button,
          { backgroundColor: props.color },
        ]}
      />
    </View>
  );
};

interface TwoOptionsAlertProps {
  title: string;
  message: string;
  textButton: string;
  textCancel: string;
  icon: string;
  isShow: boolean;
  handlerConfirm: () => void;
  handlerCancel: () => void;
}

export const TwoOptionsAlert = (props: TwoOptionsAlertProps) => {
  const {
    title,
    message,
    textButton,
    textCancel,
    icon,
    handlerConfirm,
    handlerCancel,
  } = props;
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
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        showCancelButton={true}
        confirmText={props.textButton}
        cancelText={props.textCancel}
        confirmButtonTextStyle={text.btnText}
        cancelButtonTextStyle={text.btnText}
        confirmButtonColor={Colors.blue.deep}
        onConfirmPressed={props.handlerConfirm}
        onCancelPressed={props.handlerCancel}
        customView={customAlertView}
        contentContainerStyle={container.alert}
        confirmButtonStyle={container.button}
        cancelButtonStyle={container.buttonCancel}
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
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  buttonCancel: {
    ...text.btnText,
    backgroundColor: Colors.red,
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
