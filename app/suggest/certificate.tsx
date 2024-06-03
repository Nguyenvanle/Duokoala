//"https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
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
import Button, { HrefButton } from "@/components/Button";

const imageUri: string =
  "https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png";

export default function Certificate() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={overflowLogo.container}>
        <FlaticonIcon uri={imageUri} size={450} />
      </View>
      <View style={suggest.container}>
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
            style={[suggest.option, { backgroundColor: Colors.brown }]}
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
            <Text style={suggest.optionText}>CEFR</Text>
          </TouchableOpacity>
        </View>
        <View style={suggest.decideFrame}>
          <View style={suggest.decide}>
            <HrefButton
              backgroundColor={Colors.red}
              title="Bỏ qua"
              href="/suggest/score"
            />
            <HrefButton
              backgroundColor={Colors.blue.regular}
              title="Tiếp tục"
              href="/suggest/score"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export const suggest = StyleSheet.create({
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
    backgroundColor: Colors.milk,
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

export const overflowLogo = StyleSheet.create({
  container: {
    flex: 0,
    overflow: "hidden", // Cắt icon nếu nó vượt quá kích thước khung
    maxHeight: 260,
    alignItems: "center",
    justifyContent: "center",
  },
});
