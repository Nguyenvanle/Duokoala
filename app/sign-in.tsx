import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { BasicInput } from "@/components/BasicInput";
import { index, koalaUri, logo } from "./index";
import { router } from "expo-router";
import CustomAlert from "@/components/CustomAlert";
import { useState } from "react";
import LoginViewModel from "@/screens/login/v-model";

const faceUri: string =
  "https://cdn-icons-png.flaticon.com/128/15047/15047667.png";

const ggUri: string = "https://cdn-icons-png.flaticon.com/128/2875/2875331.png";

export default function SignInScreen() {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInHandler = () => {
    router.push("/auth/signUp");
  };

  const viewModel = LoginViewModel();
  return (
    <View style={defaultStyles.pageContainer}>
      {/* root container */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={signIn.container}
      >
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
          <View style={container.input}>
            <Text style={text.subTitle}>Email</Text>
            <TextInput
              style={input.normal}
              placeholder={"kola@gmail.com"}
              placeholderTextColor={Colors.mute}
              onChangeText={(inputEmail) => setEmail(inputEmail)}
              value={email}
              secureTextEntry={false}
            />
            {/* <BasicInput placeholder="koala@gmail.com" isPassword={false} /> */}

            {/* pass container */}
            <View style={signIn.passContainer}>
              <Text style={text.subTitle}>Mật khẩu</Text>

              <TouchableOpacity style={signIn.forgotContainer}>
                <Text style={signIn.passLinkText}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={input.normal}
              placeholder={"matkhau12"}
              placeholderTextColor={Colors.mute}
              onChangeText={(inputPassword) => setPassword(inputPassword)}
              value={password}
              secureTextEntry={true}
            />
            {/* <BasicInput placeholder="matkhau123" isPassword={true}></BasicInput> */}
          </View>

          {/* button container */}
          <TouchableOpacity
            style={container.button}
            onPress={() => {
              console.log({ email, password });
              const checkedUser = viewModel.checkUserInList(email, password);
              if (checkedUser) {
                setShowAlert(true);
                console.log("Đăng nhập thành công");
              } else {
                console.log(checkedUser);
                console.log("Đăng nhập thất bại");
              }
            }}
          >
            <Text style={[text.btnText, { color: Colors.light }]}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
          <CustomAlert
            title={"Đăng nhập thành công"}
            message={"Chào mừng bạn đến với DuoKoala"}
            textButton={"Xác nhận"}
            icon={"https://cdn-icons-png.flaticon.com/512/190/190411.png"}
            isShow={showAlert}
            handlerConfirm={function (): void {
              setShowAlert(false);
              router.replace("/suggest/certificate");
            }}
          />

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

            <TouchableOpacity onPress={signInHandler}>
              <Text style={text.link}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
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
});

export const signIn = StyleSheet.create({
  container: {
    ...index.container,
    justifyContent: "flex-start",
  },
  passContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  passLinkText: {
    ...text.link,
    height: "100%",
    textAlignVertical: "center",
  },
  forgotContainer: {
    flex: 0,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  signInWithContainer: {
    ...container.center,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    gap: 4,
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
});
