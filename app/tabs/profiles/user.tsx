import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { SelectButton } from "@/components/SelectButton";
import { router } from "expo-router";
import { OnPressButton } from "@/components/Button";
import UserViewModel from "@/models/user/v-model";

export default function userScreen() {
  const userViewModel = UserViewModel();
  const user = {
    name: userViewModel.user?.name,
    role: userViewModel.user?.role,
    imgUser:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55av9IkGPlJ4mHAdYajWqaC4FecNhSiOo-Q&s",
  };
  const icon = {
    user: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
    info: "https://cdn-icons-png.flaticon.com/128/471/471662.png",
    upgrade: "https://cdn-icons-png.flaticon.com/128/1286/1286860.png",
    logOut: "https://cdn-icons-png.flaticon.com/128/10561/10561233.png",
    change: "https://cdn-icons-png.flaticon.com/128/3800/3800840.png",
  };
  useEffect(() => {
    console.log("user được cập nhật lại:");
    console.log(userViewModel.user);
  }, [userViewModel.user]);
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView style={container.page}>
        {/* page container */}

        {/* info container */}
        <View style={container.info}>
          <TouchableOpacity style={container.icon}>
            <FlaticonIcon size={150} uri={user.imgUser}></FlaticonIcon>
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
          <SelectButton
            hrefIcon={icon.change}
            title={"Thay đổi đề xuất"}
            onPress={() => {
              console.log("change suggest");
              router.replace("/suggest/certificate");
            }}
          />
        </View>
        {/* log out container */}
        <View>
          <View style={container.line}></View>
          {/* <SelectButton
            hrefIcon={icon.logOut}
            title={"Đăng xuất"}
            onPress={() => {
              console.log("log out");
              router.replace("/sign-in");
            }}
          /> */}
          <OnPressButton
            backgroundColor={Colors.red}
            title={"Đăng xuất"}
            onpress={() => {
              console.log("log out");
              userViewModel.logOut();
              router.replace("/sign-in");
            }}
          ></OnPressButton>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const container = StyleSheet.create({
  page: {
    gap: 10,
    padding: 20,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",

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
    overflow: "hidden",
    padding: 10,
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
    backgroundColor: Colors.blue.text,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
