import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
import { SignUpSchema, useSignupViewModel } from "@/screens/sign-up/v-model";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { logo } from "../index";

export default function signUp() {
  const signUpImage = "@/assets/images/Frame10.png";
  const logIn = () => {
    router.replace("/sign-in");
  };
  const signUp = () => {
    router.replace("/auth/confirm");
  };
  const { handleSignUp, loading } = useSignupViewModel();
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView style={{ ...signIn.container }}>
        {/* root container */}

        {/* logo container */}
        <View style={[logo.container, { padding: 0 }]}>
          <Image source={require(signUpImage)} />

          {/* <Text style={{ ...logo.text, fontSize: 30 }}>DUOKOALA</Text> */}
        </View>

        {/* form container */}
        <ImageBackground
          source={require("@/assets/images/radiant-bg.png")}
          style={container.form}
        >
          <Text style={text.title}>Đăng ký</Text>

          {/* input container */}
          <Formik
            initialValues={{
              email: "",
              name: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSignUp}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <View style={container.input}>
                {/* email */}
                <Text style={text.subTitle}>Email</Text>
                <TextInput
                  style={{
                    ...input.normal,
                    borderColor:
                      errors.email && touched.email
                        ? Colors.red
                        : Colors.blue.text,
                    color:
                      errors.email && touched.email
                        ? Colors.red
                        : Colors.blue.text,
                  }}
                  placeholder={"kola@gmail.com"}
                  placeholderTextColor={Colors.mute}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  secureTextEntry={false}
                  autoCapitalize="none"
                />

                {errors.email && touched.email && (
                  <Text style={signIn.errorText}>{errors.email}</Text>
                )}
                {/* tên đăng nhập */}
                <Text style={text.subTitle}>Tên đăng nhập</Text>
                <TextInput
                  style={{
                    ...input.normal,
                    borderColor:
                      errors.name && touched.name
                        ? Colors.red
                        : Colors.blue.text,
                    color:
                      errors.name && touched.name
                        ? Colors.red
                        : Colors.blue.text,
                  }}
                  placeholder={"Koalaaaa"}
                  placeholderTextColor={Colors.mute}
                  onChangeText={handleChange("name")}
                  value={values.name}
                  secureTextEntry={false}
                  autoCapitalize="none"
                />

                {errors.name && touched.name && (
                  <Text style={signIn.errorText}>{errors.name}</Text>
                )}
                {/* mật khẩu */}
                <Text style={text.subTitle}>Mật khẩu</Text>
                <TextInput
                  style={{
                    ...input.normal,
                    borderColor:
                      errors.password && touched.password
                        ? Colors.red
                        : Colors.blue.text,
                    color:
                      errors.password && touched.password
                        ? Colors.red
                        : Colors.blue.text,
                  }}
                  placeholder={"matkhau123"}
                  placeholderTextColor={Colors.mute}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />
                {errors.password && touched.password && (
                  <Text style={signIn.errorText}>{errors.password}</Text>
                )}
                {/* xác nhận mật khẩu */}
                <Text style={text.subTitle}>Xác nhận mật khẩu</Text>
                <TextInput
                  style={{
                    ...input.normal,
                    borderColor:
                      errors.confirmPassword && touched.confirmPassword
                        ? Colors.red
                        : Colors.blue.text,
                    color:
                      errors.password && touched.password
                        ? Colors.red
                        : Colors.blue.text,
                  }}
                  placeholder={"matkhau123"}
                  placeholderTextColor={Colors.mute}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={signIn.errorText}>{errors.confirmPassword}</Text>
                )}
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
                {/*nút đăng ký */}
                <TouchableOpacity
                  style={container.button}
                  //onPress={() => onLoginPress()}
                  onPress={() => handleSubmit}
                  disabled={isSubmitting}
                >
                  {loading ? (
                    <ActivityIndicator size={"large"} color={"white"} />
                  ) : (
                    <Text style={[text.btnText, { color: Colors.light }]}>
                      ĐĂNG KÝ
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          {/* button container */}

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
      </ScrollView>
    </ImageBackground>
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
    alignSelf: "stretch",
    marginTop: 10,
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
export const signIn = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",

    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: -1,
  },
  passContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  errorText: {
    ...text.note,
    color: Colors.red,

    marginLeft: 1,
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
});
