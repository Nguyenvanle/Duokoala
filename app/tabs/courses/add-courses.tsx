import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import Colors from "@/constants/Colors";
import { container } from "@/app/sign-in";
import { BasicInput, DescriptionInput } from "@/components/BasicInput";
import { suggest } from "@/app/suggest/certificate";
import Button from "@/components/Button";
import { Picker } from "@react-native-picker/picker";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const pHolder = {
  name: "TOEIC 450,...",
  description: "Khóa học dành cho ...",
  level: "Độ khó",
};

export default function AddCourses() {
  const [selectedValue, setSelectedValue] = useState("Dễ");
  const [isPickerShown, setPickerShown] = useState(false);

  const showPicker = () => {
    setPickerShown(true);
  };

  const hidePicker = () => {
    setPickerShown(false);
  };

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

            <Text style={text.subTitle}>ĐỘ KHÓ</Text>
            <TouchableOpacity style={create.normal} onPress={showPicker}>
              <Picker
                style={{
                  flex: 0,
                  backgroundColor: "red",
                }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Easy" value="Dễ" style={create.normal} />
                <Picker.Item
                  label="Medium"
                  value="Trung bình"
                  style={create.normal}
                />
                <Picker.Item
                  label="Difficult"
                  value="Khó"
                  style={create.normal}
                />
                <Picker.Item
                  label="Advanced"
                  value="Cực Khó"
                  style={create.normal}
                />
              </Picker>
            </TouchableOpacity>
            {/* <BasicInput placeholder={pHolder.level} isPassword={false} /> */}

            <Text style={text.subTitle}>BÀI GIẢNG</Text>
            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Bài giảng</Text>
            </TouchableOpacity>

            <Text style={text.subTitle}>TÀI LIỆU THAM KHẢO</Text>

            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Tài liệu hỗ trợ cho khóa học</Text>
            </TouchableOpacity>

            <Text style={text.subTitle}>BÀI TẬP</Text>

            <TouchableOpacity style={create.normal}>
              <Text style={create.tHolder}>Bài tập của khóa học</Text>
            </TouchableOpacity>

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
  normal: {
    ...text.mainContent,
    textAlign: "left",
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    paddingLeft: 20,
    alignSelf: "stretch",
  },
  tHolder: {
    color: Colors.mute,
    paddingTop: 13,
    fontSize: 16,
  },
  pickercontainer: {
    width: "100%",
    alignItems: "center",
  },
});
