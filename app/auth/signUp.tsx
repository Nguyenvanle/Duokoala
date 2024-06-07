import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { BasicInput } from "@/components/BasicInput";
import { index, koalaUri, logo } from "../index";
import { signIn } from "../sign-in";
import { router } from "expo-router";
export default function signUp() {
  const signUpImage = "@/assets/images/Frame10.png";
  const logIn = () => {
    router.replace("/sign-in");
  };
  const signUp = () => {
    router.replace("/auth/confirm");
  };
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* root container */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={{ ...signIn.container, justifyContent: "flex-start" }}
      >
        {/* logo container */}
        <View style={logo.container}>
          <Image source={require(signUpImage)} />

          <Text style={{ ...logo.text, fontSize: 30 }}>DUOKOALA</Text>
        </View>

        {/* form container */}
        <ImageBackground
          source={require("@/assets/images/radiant-bg.png")}
          style={container.form}
        >
          <Text style={text.title}>Đăng ký</Text>

          {/* input container */}
          <View style={container.input}>
            {/* email */}
            <Text style={text.subTitle}>Email</Text>
            <BasicInput placeholder="koala@gmail.com" isPassword={false} />
            {/* tên đăng nhập */}
            <Text style={text.subTitle}>Tên đăng nhập</Text>
            <BasicInput placeholder="Koala" isPassword={false} />
            {/* mật khẩu */}
            <Text style={text.subTitle}>Mật khẩu</Text>
            <BasicInput placeholder="matkhau123" isPassword={true}></BasicInput>
            {/* xác nhận mật khẩu */}
            <Text style={text.subTitle}>Xác nhận mật khẩu</Text>
            <BasicInput placeholder="matkhau123" isPassword={true}></BasicInput>
            {/*Thỏa thuận dịch vụ  */}
            <View style={[container.center, { flexDirection: "row" }]}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: Colors.light,
                  marginRight: 5,
                  borderWidth: 2,
                }}
              ></View>
              <Text style={text.container}>Tôi đồng ý với </Text>
              <TouchableOpacity>
                <Text style={[text.link, { fontSize: 12 }]}>
                  "Thỏa thuận dịch vụ & bảo mật"
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* button container */}
          <TouchableOpacity
            style={{ ...container.button, marginTop: 10 }}
            onPress={signUp}
          >
            <Text style={{ ...text.btnText, color: Colors.light }}>
              ĐĂNG KÝ
            </Text>
          </TouchableOpacity>

          {/* sign up link container*/}
          <View style={container.register}>
            <Text style={text.mainContent}> Bạn đã có tài khoản? </Text>

            <TouchableOpacity>
              <Text style={text.link} onPress={logIn}>
                Đăng nhập ngay
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
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
    backgroundColor: Colors.blue.regular,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.blue.text,
    height: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: Colors.blue.text,
    transform: [{ translateY: 12 }],
  },

  register: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
