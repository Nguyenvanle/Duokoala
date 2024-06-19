import { logo } from "@/app/index";
import { container } from "@/app/sign-in";
import { BasicInput, DescriptionInput } from "@/components/BasicInput";
import Button from "@/components/Button";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
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
import { home } from "../homes/home";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const pHolder = {
  name: "Nhập tên khóa học",
  description: "Nhập mô tả về khóa học",
  level: "Nhập độ khó cho khóa học",
};

export default function AddCourses() {
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={home.container}
      >
        {/* root container */}
        <View style={logo.container}>
          <FlaticonIcon uri={imageURI} size={160} />
        </View>

        {/* form container */}
        <ImageBackground
          source={require("@/assets/images/radiant-bg.png")}
          style={container.form}
        >
          {/* input container */}
          <View style={container.input}>
            <Text style={text.subTitle}>TÊN KHÓA HỌC</Text>

            <BasicInput placeholder={pHolder.name} isPassword={false} />

            <Text style={text.subTitle}>MÔ TẢ KHÓA HỌC</Text>

            <View style={{ alignSelf: "stretch" }}>
              <DescriptionInput
                placeholder={pHolder.description}
                isPassword={false}
              />
            </View>

            <Text style={text.subTitle}>ĐỘ KHÓ</Text>

            <BasicInput placeholder={pHolder.level} isPassword={false} />

            <Text style={text.subTitle}>BÀI GIẢNG</Text>

            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Bài giảng</Text>
              <View style={create.tHolder}>
                <FlaticonIcon
                  uri={"https://cdn-icons-png.flaticon.com/512/81/81081.png"}
                  size={20}
                />
              </View>
            </TouchableOpacity>

            <Text style={text.subTitle}>TÀI LIỆU THAM KHẢO</Text>

            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Tài liệu hỗ trợ cho khóa học</Text>
              <View style={create.tHolder}>
                <FlaticonIcon
                  uri={"https://cdn-icons-png.flaticon.com/512/81/81081.png"}
                  size={20}
                />
              </View>
            </TouchableOpacity>

            <Text style={text.subTitle}>BÀI TẬP</Text>

            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Bài tập của khóa học</Text>
              <View style={create.tHolder}>
                <FlaticonIcon
                  uri={"https://cdn-icons-png.flaticon.com/512/81/81081.png"}
                  size={20}
                />
              </View>
            </TouchableOpacity>

            <View style={create.btnContainer}>
              <TouchableOpacity
                style={create.container}
                onPress={() => {
                  {
                    router.push("/tabs/courses/courses-list");
                  }
                }}
              >
                <Text style={text.btnText}>HỦY</Text>
                {/* <Button backgroundColor={Colors.red} title="HỦY" /> */}
              </TouchableOpacity>
              <Button backgroundColor={Colors.blue.regular} title="TIẾP TỤC" />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
}

export const create = StyleSheet.create({
  btnContainer: {
    flex: 0,
    flexDirection: "row",
    alignContent: "flex-end",
    flexShrink: 0,
    gap: 10,
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 16,
  },
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tHolder: {
    color: Colors.mute,
    paddingTop: 13,
    fontSize: 16,
    paddingRight: 20,
  },
  container: {
    ...defaultStyles.btn,
    borderWidth: 3,
    borderColor: Colors.black,
    minHeight: 48,
    paddingHorizontal: 20,
    minWidth: 115,
    backgroundColor: Colors.red,
  },
});
