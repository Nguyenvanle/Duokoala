import { OnPressButton } from "@/components/Button";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { SelectButton } from "@/components/SelectButton";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";

import { useUserViewModel } from "@/vms/user";
import { router } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function userScreen() {
  // const userViewModel = UserViewModel();

  const { user, signOutUser } = useUserViewModel();

  const userInfo = {
    name: user?.name || "undefined",
    email: user?.email || "undefined",
    role: user?.role,
    imgUser: user?.avatarUrl,
  };

  const icon = {
    user: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
    info: "https://cdn-icons-png.flaticon.com/128/471/471662.png",
    upgrade: "https://cdn-icons-png.flaticon.com/128/1286/1286860.png",
    logOut: "https://cdn-icons-png.flaticon.com/128/10561/10561233.png",
    change: "https://cdn-icons-png.flaticon.com/128/3800/3800840.png",
  };

  const logoutHandler = () => {
    signOutUser();
    console.log("log out");
    router.replace("/sign-in");
  };

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      {/* page container */}
      <ScrollView style={container.page}>
        {/* info container */}
        <View style={container.info}>
          <TouchableOpacity style={container.icon}>
            <FlaticonIcon
              size={100}
              uri={userInfo.imgUser as string}
            ></FlaticonIcon>
          </TouchableOpacity>
          <Text style={text.subTitle}>{userInfo.name}</Text>
          <Text style={textStyle.email}>{userInfo.email}</Text>
          {/* role container */}
          <View style={container.role}>
            <Text style={textStyle.role}>Học viên</Text>
          </View>
        </View>
        {/* setting container */}
        <View style={container.profile}>
          <SelectButton
            hrefIcon={icon.user}
            title={"Thông tin người dùng"}
            onPress={() => {
              console.log("information user");
            }}
          />
          <SelectButton
            hrefIcon={icon.info}
            title={"Thông tin ứng dụng"}
            onPress={() => {
              console.log("information app");
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
              router.replace("/suggest");
            }}
          />
        </View>
        {/* log out container */}
        <View>
          <OnPressButton
            backgroundColor={Colors.red}
            title={"Đăng xuất"}
            onPress={() => {
              logoutHandler();
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
    flex: 1,
    paddingHorizontal: 10,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
  profile: {
    marginVertical: 10,

    padding: 10,
  },
});
const textStyle = StyleSheet.create({
  email: {
    ...text.subTitle,
    fontWeight: "400",
    fontSize: 16,
  },
  role: {
    ...text.subTitle,
    fontWeight: "400",
    fontSize: 16,
  },
});
