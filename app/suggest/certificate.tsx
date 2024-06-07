//"https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { index } from "@/app/index";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { HrefButton } from "@/components/Button";

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
    paddingVertical: 20,
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
    gap: 10,
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

export const overflowLogo = StyleSheet.create({
  container: {
    flex: 0,
    overflow: "hidden", // Cắt icon nếu nó vượt quá kích thước khung
    maxHeight: 260,
    alignItems: "center",
    justifyContent: "center",
  },
});
