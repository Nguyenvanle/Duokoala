import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import Colors from "@/constants/Colors";
import { container } from "@/app/sign-in";
import { BasicInput, DescriptionInput } from "@/components/BasicInput";
import { suggest } from "@/app/suggest/certificate";
import Button from "@/components/Button";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const pHolder = {
  name: "Điền tên khóa học",
  description: "Mô tả tổng quan khóa học",
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
            <Text style={text.subTitle}>Tên khóa học</Text>

            <BasicInput placeholder={pHolder.name} isPassword={false} />

            <Text style={text.subTitle}>Mô tả khóa học</Text>

            <View style={{ alignSelf: "stretch" }}>
              <DescriptionInput
                placeholder={pHolder.description}
                isPassword={false}
              />
            </View>

            <Text style={text.subTitle}>Tên khóa học</Text>

            <BasicInput placeholder={pHolder.name} isPassword={false} />

            <Text style={text.subTitle}>Tên khóa học</Text>

            <BasicInput placeholder={pHolder.name} isPassword={false} />

            <Text style={text.subTitle}>Tên khóa học</Text>

            <BasicInput placeholder={pHolder.name} isPassword={false} />

            <View style={create.btnContainer}>
              <Button backgroundColor={Colors.red} title="Bỏ qua" />
              <Button backgroundColor={Colors.blue.regular} title="Tiếp tục" />
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
