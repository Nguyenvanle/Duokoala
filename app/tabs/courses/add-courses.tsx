import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import Colors from "@/constants/Colors";
import { container } from "@/app/sign-in";
import { BasicInput, DescriptionInput } from "@/components/BasicInput";
import Button, { buttonStyle } from "@/components/Button";
import { home } from "../homes/home";
import { router } from "expo-router";
import { suggest } from "@/screens/suggest/suggestScreen";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const pHolder = {
  name: "Nhập tên khóa học",
  description: "Nhập mô tả về khóa học",
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

            <Text style={text.subTitle}>CHỦ ĐỀ KHÓA HỌC</Text>

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
              <myBtn.Button
                backgroundColor={Colors.blue.regular}
                title="TIẾP TỤC"
              />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
}

export const create = StyleSheet.create({
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
    height: 50,
    paddingLeft: 20,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  option: {
    ...text.mainContent,
    textAlign: "left",
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 50,
    width: 100,
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
