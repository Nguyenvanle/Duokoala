import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { BasicInput } from "@/components/BasicInput";
export default function SignInScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View
      style={{
        ...defaultStyles.pageContainer,
        display: "flex",
        alignItems: "center",
        padding: 30,
      }}
    >
      {/* container */}
      <View style={container.logo}>
        <FlaticonIcon
          size={120}
          uri={"https://cdn-icons-png.flaticon.com/512/3069/3069172.png"}
        ></FlaticonIcon>
        <Text style={text.logo}> DUOKOALA</Text>
      </View>
      <View style={container.form}>
        {/* test thử, ko ổn thì sửa:))) */}
        <Text style={{ ...text.logo, fontSize: 24 }}>Đăng nhập</Text>
        <View style={container.input}>
          <BasicInput
            placeholder="Tên đăng nhập"
            isPassword={false}
          ></BasicInput>
          <BasicInput placeholder="Mật khẩu" isPassword={true}></BasicInput>
        </View>
        <TouchableOpacity>
          <Text style={{ ...text.button, alignSelf: "flex-end" }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          {/* <CheckBox value={isChecked} onValueChange={setIsChecked} /> */}
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: Colors.light,
              marginRight: 5,
              borderWidth: 2,
            }}
          ></View>
          <Text style={{ ...text.button, fontSize: 10 }}>Tôi đồng ý với </Text>
          <TouchableOpacity>
            <Text
              style={{
                ...text.button,
                fontSize: 10,
                color: Colors.blue.deep,
              }}
            >
              "Thỏa thuận dịch vụ & bảo mật"
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={container.button}>
          <Text style={{ ...text.button, color: Colors.light }}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <View style={container.center}>
          <View style={container.line}>
            <Text> </Text>
          </View>
          <View
            style={{
              ...container.center,
              backgroundColor: Colors.blue.sky,
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <Text style={text.button}>Hoặc đăng nhập bằng</Text>
          </View>
        </View>
        <View style={container.social}>
          <View style={container.icon}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/2875/2875331.png",
              }}
            ></Image>
          </View>
          <View style={container.icon}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/15047/15047667.png",
              }}
            ></Image>
          </View>
        </View>
        <View style={container.register}>
          <Text style={text.button}> Bạn chưa có tài khoản? </Text>
          <TouchableOpacity>
            <Text style={{ ...text.button, color: Colors.blue.deep }}>
              Đăng ký ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    // alignItems: "center",
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
    width: "100%",
    gap: 20,
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
const text = StyleSheet.create({
  logo: {
    color: Colors.blue.text,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10,
  },
  button: {
    color: Colors.blue.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
