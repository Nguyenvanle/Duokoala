import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { SelectButton } from "@/components/SelectButton";
import { index } from "@/app/index";

export default function userScreen() {
  const user = {
    name: "Nguyễn Hưng Thịnh",
    role: "Học Viên",
    imgUser: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
  };
  const icon = {
    user: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
    info: "https://cdn-icons-png.flaticon.com/128/471/471662.png",
    upgrade: "https://cdn-icons-png.flaticon.com/128/1286/1286860.png",
    logOut: "https://cdn-icons-png.flaticon.com/128/10561/10561233.png",
  };
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* page container */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={container.page}
      >
        {/* info container */}
        <View style={container.info}>
          <TouchableOpacity style={container.icon}>
            <FlaticonIcon size={100} uri={user.imgUser}></FlaticonIcon>
          </TouchableOpacity>
          <Text style={text.subTitle}>{user.name}</Text>
          {/* role container */}
          <View style={container.role}>
            <Text
              style={[
                text.btnText,
                { fontSize: 16, color: Colors.blue.regular },
              ]}
            >
              Học viên
            </Text>
          </View>
        </View>
        {/* setting container */}
        <View>
          <View style={container.line}></View>
          <SelectButton
            hrefIcon={icon.user}
            title={"Thông tin người dùng"}
            onPress={() => {
              console.log("infomation user");
            }}
          />
          <SelectButton
            hrefIcon={icon.info}
            title={"Thông tin ứng dụng"}
            onPress={() => {
              console.log("infomation app");
            }}
          />
          <SelectButton
            hrefIcon={icon.upgrade}
            title={"Nâng cấp tài khoản"}
            onPress={() => {
              console.log("upgrade role");
            }}
          />
        </View>
        {/* log out container */}
        <View>
          <View style={container.line}></View>
          <SelectButton
            hrefIcon={icon.logOut}
            title={"Đăng xuất"}
            onPress={() => {
              console.log("log out");
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const container = StyleSheet.create({
  page: {
    ...index.container,
    gap: 10,
    justifyContent: "flex-start",
    padding: 30,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    backgroundColor: Colors.light,
    borderColor: Colors.blue.text,
    borderWidth: 2,
    borderRadius: 100,
  },

  role: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.blue.regular,
    backgroundColor: Colors.milk,
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: Colors.blue.text,
    marginVertical: 15,
  },
});
