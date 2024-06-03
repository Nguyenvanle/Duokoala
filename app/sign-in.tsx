import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { BasicInput } from "@/components/BasicInput";
import { index, koalaUri, logo } from "./index";
import { router } from "expo-router";

const faceUri: string =
  "https://cdn-icons-png.flaticon.com/128/15047/15047667.png";

const ggUri: string = "https://cdn-icons-png.flaticon.com/128/2875/2875331.png";

export default function SignInScreen() {
  const signInHanler = () => {
    router.push("/auth/signUp");
  };
  return (
    <View style={defaultStyles.pageContainer}>
      {/* root container */}
      <View style={signIn.container}>
        {/* logo container */}
        <View style={logo.container}>
          <FlaticonIcon size={160} uri={koalaUri} />

          <Text style={logo.text}>DUOKOALA</Text>
        </View>

        {/* form container */}
        <View style={container.form}>
          <Text style={text.title}>Đăng nhập</Text>

          {/* input container */}
          <View style={container.input}>
            <Text style={text.subTitle}>Email</Text>

            <BasicInput placeholder="koala@gmail.com" isPassword={false} />

            {/* pass container */}
            <View style={signIn.passContainer}>
              <Text style={text.subTitle}>Mật khẩu</Text>

              <TouchableOpacity style={signIn.forgotContainer}>
                <Text style={signIn.passLinkText}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>

            <BasicInput placeholder="matkhau123" isPassword={true}></BasicInput>
          </View>

          {/* button container */}
          <TouchableOpacity
            style={container.button}
            onPress={() => {
              router.push("/tabs");
            }}
          >
            <Text style={[text.btnText, { color: Colors.light }]}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>

          {/* line container */}
          <View style={container.center}>
            <View style={container.line} />

            {/* sign in with */}
            <View style={signIn.signInWithContainer}>
              <Text style={[text.btnText, { color: Colors.blue.text }]}>
                Hoặc đăng nhập bằng
              </Text>
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

            <TouchableOpacity onPress={signInHanler}>
              <Text style={text.link}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    width: "100%",
    borderWidth: 4,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    gap: 10,
    padding: 20,
    paddingTop: 10,
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
    backgroundColor: Colors.blue.sky,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
