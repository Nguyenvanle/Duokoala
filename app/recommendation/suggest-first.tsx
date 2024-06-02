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
            <Text style={text.mainContent}>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={text.mainContent}>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={text.mainContent}>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={suggest.option}>
            <Text style={text.mainContent}>Answer</Text>
          </TouchableOpacity>
        </View>

        <View style={suggest.decideFrame}>
          <View style={suggest.decide}>
            <View style={suggest.button}>
              <Text>Bỏ qua</Text>
            </View>
            <View style={suggest.button}>
              <Text>Tiếp tục</Text>
            </View>
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
    width: 232,
    height: 48,
    paddingRight: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 20, // Khoảng cách dọc giữa các phần tử
    flexShrink: 0,
  },
  contentFrame: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  option: {
    display: "flex",
    minWidth: 300,
    width: "auto",
    height: 56,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8, // Border radius
    borderWidth: 3, // Độ rộng của border
    borderColor: Colors.black, // Màu sắc của border
  },
  button: {
    display: "flex",
    height: 48,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
