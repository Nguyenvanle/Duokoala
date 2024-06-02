import {
  StyleSheet,
  Text,
  TextInputBase,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles } from "@/constants/Styles";
import { logo } from "./../index";
import Colors from "@/constants/Colors";
const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";
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
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={create.button1}>
            <Text style={create.note1}>TẠO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={create.button2}>
            <Text style={create.note2}>HỦY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const create = StyleSheet.create({
  logo1: {
    color: Colors.blue.text,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10,
  },
  form1: {
    flex: 0,
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.blue.sky,
    width: "95%",
    borderWidth: 4,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    gap: 10,
    padding: 20,
    margin: 10,
  },
  input1: {
    width: "100%",
    gap: 20,
  },
  normal1: {
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 50,
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 20,
  },
  normal2: {
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 120,
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 20,
  },
  note: {
    paddingTop: 12,
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: Colors.light,
    width: "70%",
  },
  button1: {
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
    width: 170,
  },
  button2: {
    marginHorizontal: 23,
    backgroundColor: Colors.red,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.blue.text,
    height: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    width: 170,
  },
  note1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: Colors.blue.regular,
    width: "70%",
  },
  note2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: Colors.red,
    width: "70%",
  },
});
