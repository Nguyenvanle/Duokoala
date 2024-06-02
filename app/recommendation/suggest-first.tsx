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
import Button from "@/components/Button";

const imageUri: string =
  "https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png";

export default function SuggestFirst() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={suggest.container}>
        <FlaticonIcon uri={imageUri} size={290} />
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
          <TouchableOpacity
            style={[suggest.option, { backgroundColor: Colors.teal }]}
          >
            <Text style={[suggest.optionText, { color: Colors.milk }]}>
              TOEIC
            </Text>
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
            <Button backgroundColor={Colors.red} title="Bỏ qua" />
            <Button backgroundColor={Colors.blue.regular} title="Tiếp tục" />
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
    flex: 0,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  decideFrame: {
    flex: 0,
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  decide: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
    flexShrink: 0,
    gap: 20,
    alignSelf: "stretch",
  },
  contentFrame: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  option: {
    flex: 0,
    padding: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8, // Border radius
    borderWidth: 3, // Độ rộng của border
    borderColor: Colors.black, // Màu sắc của border
    backgroundColor: Colors.milk,
  },
  button: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.black,
  },
  optionText: {
    ...text.mainContent,
    fontWeight: "bold",
  },
});
