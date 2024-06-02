import { Text, TouchableOpacity, TextInput, View } from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles } from "@/constants/Styles";
import { logo } from "./../index";
import Colors from "@/constants/Colors";
import { imageURI, create } from "./add-courses";

export default function AddCourses() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={logo.container}>
        <FlaticonIcon uri={imageURI} size={160} />
      </View>
      <View>
        <Text style={create.logo1}>TẠO KHÓA HỌC</Text>
      </View>
      <View style={create.form1}>
        <View style={create.input1}>
          <TextInput
            style={create.normal1}
            placeholderTextColor={Colors.mute}
            placeholder="TÊN KHÓA HỌC"
          ></TextInput>
        </View>
        <View style={create.input1}>
          <TextInput
            style={create.normal2}
            placeholderTextColor={Colors.mute}
            placeholder="MÔ TẢ KHÓA HỌC"
          ></TextInput>
        </View>
        <View style={create.input1}>
          <TouchableOpacity style={create.normal1}>
            <Text style={create.note}>BÀI GIẢNG</Text>
          </TouchableOpacity>
        </View>
        <View style={create.input1}>
          <TouchableOpacity style={create.normal1}>
            <Text style={create.note}>TÀI LIỆU THAM KHẢO</Text>
          </TouchableOpacity>
        </View>
        <View style={create.input1}>
          <TouchableOpacity style={create.normal1}>
            <Text style={create.note}>BÀI TẬP</Text>
          </TouchableOpacity>
        </View>
        <View flexDirection>"</View>
        <TouchableOpacity style={create.button1}>
          <Text>TẠO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>HỦY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
