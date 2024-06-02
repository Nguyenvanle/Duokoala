import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { index } from "@/app/index";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";

export default function SuggestFirst() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={suggest.container}>
        <FlaticonIcon
          uri="https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
          size={290}
        />
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>Bắt đầu thôi nào!</Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>
              Bạn đang theo đuổi chứng chỉ nào?
            </Text>
          </View>
        </View>

        <View style={suggest.subFrame}>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>TOEIC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>IELTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>VSTEP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={suggest.optionText}>CERF</Text>
          </TouchableOpacity>
        </View>

        <View style={suggest.decideFrame}>
          <View style={suggest.decide}>
            <TouchableOpacity
              style={[suggest.button, { backgroundColor: Colors.black }]}
            >
              <Text
                style={[
                  text.mainContent,
                  { color: Colors.light, fontWeight: "bold" },
                ]}
              >
                Bỏ qua
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[suggest.button, { backgroundColor: Colors.blue.deep }]}
            >
              <Text
                style={[
                  text.mainContent,
                  { color: Colors.light, fontWeight: "bold" },
                ]}
              >
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const suggest = StyleSheet.create({
  container: {
    ...index.container,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  subFrame: {
    display: "flex",
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  decideFrame: {
    display: "flex",
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  decide: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 50,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexShrink: 0,
    gap: 20,
  },
  contentFrame: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  option: {
    display: "flex",
    minWidth: 310,
    width: "auto",
    height: 56,
    padding: 15,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8, // Border radius
    borderWidth: 3, // Độ rộng của border
    borderColor: Colors.black, // Màu sắc của border
  },
  button: {
    display: "flex",
    height: 50,
    width: 115,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  optionText: {
    ...text.mainContent,
    fontWeight: "bold",
  },
});
