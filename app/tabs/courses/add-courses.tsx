import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import Colors from "@/constants/Colors";
import { container } from "@/app/sign-in";
import {
  BasicInput,
  DescriptionInput,
  TouchInput,
} from "@/components/BasicInput";
import { suggest } from "@/app/suggest/certificate";
import Button from "@/components/Button";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const pHolder = {
  name: "TOEIC 450,...",
  description: "Khóa học dành cho ...",
};
const tHolder = {
  lesson: "Bài giảng",
  references: "Tài liệu hỗ trợ cho khóa học",
  exercise: "Bài tập",
};

export default function AddCourses() {
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      <View style={index.container}>
        {/* root container */}
        <View style={logo.container}>
          <FlaticonIcon uri={imageURI} size={160} />
        </View>

        {/* form container */}
        <View style={container.form}>
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
            <Text style={text.subTitle}>BÀI GIẢNG</Text>
            <TouchableOpacity style={text.subTitle}>
              <TouchInput
                placeholder={tHolder.lesson}
                isPassword={false}
                handlePress="https://docs.google.com/forms/d/1nCI5wEgwenUyU6BKmpx9lsciXRS6MsklHgjF_2-dJYI/edit"
              />
            </TouchableOpacity>
            <Text style={text.subTitle}>TÀI LIỆU THAM KHẢO</Text>

            {/* <BasicInput placeholder={pHolder.references} isPassword={false} /> */}

            <Text style={text.subTitle}>BÀI TẬP</Text>

            {/* <BasicInput placeholder={pHolder.exercise} isPassword={false} /> */}

            <View style={create.btnContainer}>
              <Button backgroundColor={Colors.red} title="HỦY" />
              <Button backgroundColor={Colors.blue.regular} title="TIẾP TỤC" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const create = StyleSheet.create({
  btnContainer: {
    ...suggest.decide,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 16,
  },
});
