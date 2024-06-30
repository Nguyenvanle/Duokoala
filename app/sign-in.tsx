import CustomAlert from "@/components/CustomAlert";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { koalaUri, logo } from "./index";
import React from "react";
import FormSignIn from "@/components/FormSignIn";
import useSignInViewModel from "@/screens/sign-in/validation";

const faceUri: string =
  "https://cdn-icons-png.flaticon.com/128/15047/15047667.png";

const ggUri: string = "https://cdn-icons-png.flaticon.com/128/2875/2875331.png";

export default function SignInScreen() {
  const { signUpHandler } = useSignInViewModel();
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView>
        {/* root container */}
        <View style={signIn.container}>
          {/* logo container */}
          <View style={logo.container}>
            <FlaticonIcon size={160} uri={koalaUri} />

            <Text style={logo.text}>DUOKOALA</Text>
          </View>

          {/* form container */}
          <ImageBackground
            source={require("@/assets/images/radiant-bg.png")}
            style={container.form}
          >
            <Text style={text.title}>Đăng nhập</Text>

            {/* input container */}
            <FormSignIn />

            {/* button container */}

            {/* <CustomAlert
              title={"Đăng nhập thành công"}
              message={"Chào mừng bạn đến với DuoKoala"}
              textButton={"Xác nhận"}
              icon={"https://cdn-icons-png.flaticon.com/512/190/190411.png"}
              isShow={showTrueAlert}
              handlerConfirm={confirmAlertHandler}
              color={Colors.green}
            />
            <CustomAlert
              title={"Đăng nhập thất bại"}
              message={"Vui lòng nhập lại email và mật khẩu"}
              textButton={"Xác nhận"}
              icon={"https://cdn-icons-png.flaticon.com/512/190/190406.png"}
              isShow={showErrorAlert}
              handlerConfirm={() => {
                setShowErrorAlert(false);
              }}
              color={Colors.red}
            /> */}

            {/* line container */}
            <View style={container.center}>
              {/* sign in with */}
              <View style={signIn.signInWithContainer}>
                <View style={container.line} />
                <Text style={[text.btnText, { color: Colors.blue.text }]}>
                  Hoặc đăng nhập bằng
                </Text>

                <View style={container.line} />
              </View>
            </View>

            {/* social sign in container */}
            <View style={container.social}>
              <View style={container.icon}>
                <FlaticonIcon uri={ggUri} size={40} />
              </View>

              <View style={container.icon}>
                <FlaticonIcon uri={faceUri} size={40} />
              </View>
            </View>

            {/* sign up link container*/}
            <View style={container.register}>
              <Text style={text.mainContent}> Bạn chưa có tài khoản? </Text>

              <TouchableOpacity onPress={signUpHandler}>
                <Text style={text.link}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export const container = StyleSheet.create({
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

  line: {
    height: 2,
    width: "25%",
    backgroundColor: Colors.blue.text,
  },
  social: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: Colors.light,
    borderColor: Colors.blue.text,
    borderWidth: 2,
    borderRadius: 50,
  },
  register: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    alignItems: "flex-start",
    gap: 5,
    flex: 0,
    alignSelf: "stretch",
  },
});

export const signIn = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",

    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: -1,
  },

  signInWithContainer: {
    ...container.center,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    gap: 4,
  },
});
