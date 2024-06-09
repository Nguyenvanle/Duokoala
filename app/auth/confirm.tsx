import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
import { BasicInput } from "@/components/BasicInput";

import { signIn } from "../sign-in";
import { HrefButton } from "@/components/Button";

export default function confirm() {
  const koalaProtectImg = "@/assets/images/koalaProtect.png";
  const sizeIcon: number = 150;

  return (
    <View style={defaultStyles.pageContainer}>
      {/* root container */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={signIn.container}
      >
        {/* logo container */}
        <View style={logo.container}>
          <Image
            source={require(koalaProtectImg)}
            style={{ width: sizeIcon, height: sizeIcon }}
            resizeMode="contain"
          />
          <Text style={{ ...logo.text, fontSize: 24 }}>XÁC THỰC TÀI KHOẢN</Text>
        </View>

        {/* form container */}
        <ImageBackground
          source={require("@/assets/images/radiant-bg.png")}
          style={container.form}
        >
          <View style={container.text}>
            <Text style={text.mainContent}>
              Vui lòng kiểm tra email của bạn
            </Text>
            <Text style={text.mainContent}>
              Chúng tôi đã gửi một mã xác thực đến địa chỉ email
            </Text>
            <Text style={[text.subTitle, { color: Colors.red, padding: 2 }]}>
              "Koala123@gmail.com"
            </Text>
          </View>

          {/* confirm container */}
          <View style={container.input}>
            <Text style={text.subTitle}>Mã xác thực</Text>
            <BasicInput placeholder="Mã xác thực" isPassword={false} />
          </View>

          {/* button container */}
          <View style={container.button}>
            <HrefButton
              backgroundColor={Colors.red}
              title={"LẤY MÃ"}
              href={"/auth/confirm"}
            ></HrefButton>
            <HrefButton
              backgroundColor={Colors.blue.regular}
              title={"XÁC NHẬN"}
              href={"/auth/intro"}
            ></HrefButton>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const container = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  form: {
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Colors.blue.sky,
    borderWidth: 4,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    gap: 10,
    padding: 20,
    paddingTop: 10,
    overflow: "hidden",
  },
  input: {
    alignItems: "flex-start",
    gap: 5,
    flex: 0,
    alignSelf: "stretch",
  },
  button: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
    marginTop: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: Colors.blue.text,
    transform: [{ translateY: 12 }],
  },
});
const logo = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.black,
  },
});
