import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import Colors from "@/constants/Colors";
import { container } from "@/app/sign-in";
import { BasicInput, DescriptionInput } from "@/components/BasicInput";
import { suggest } from "@/app/suggest/certificate";
import Button from "@/components/Button";
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
    <View style={defaultStyles.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={home.container}
      ></ImageBackground>
    </View>
  );
}
