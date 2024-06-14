//"https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png"
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { index } from "@/app/index";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { HrefButton } from "@/components/Button";
import { DefaultOption, SelectedOption } from "@/components/Option";
import useSuggestStore, { cerScore } from "./model";
import { RadioBG } from "@/components/RadioBG";
interface SuggestPage {
  uri: string;
  uriSize: number;
  title: string;
  content: string;
  option: string[];
}
//260//320 //
export function getCerName() {
  return cerData.map((cer) => cer.cerName);
}
//1 2 3 4 5
export function getCerScore(cerName: string): string[] | [] {
  const cerMap = new Map(cerData.map((cer) => [cer.cerName, cer.score]));
  return cerMap.get(cerName) || [];
}
export function Suggest(props: SuggestPage) {
  // dua qua trang screen khac'
  const { uri, uriSize, title, content, option } = props;
  // const { getCer } = useSuggestStore();
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <View style={suggest.container}>
        <View style={overflowLogo.container}>
          <FlaticonIcon uri={uri} size={uriSize} />
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.title}>{title}</Text>
          </View>
        </View>
        <View style={suggest.subFrame}>
          <View style={suggest.contentFrame}>
            <Text style={text.mainContent}>{content}</Text>
          </View>
        </View>
        <RadioBG Options={option}></RadioBG>
      </View>
    </ImageBackground>
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
  button: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.black,
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

interface CerData {
  cerName: string;
  score: string[];
}
export const cerData = [
  {
    cerName: "TOEIC",
    score: ["450 điểm", "650 điểm", "750 điểm", "900 điểm"],
  },
  {
    cerName: "IELTS",
    score: ["4.5 - 5.0 điểm", "5.5 - 6.0 điểm", "6.5 - 7.0 điểm", "7.5+ điểm"],
  },
  {
    cerName: "VSTEP",
    score: ["Bậc 3 (B1)", "Bậc 4 (B2)", "Bậc 5 (C1)", "Bậc 6 (C2)"],
  },
  {
    cerName: "CEFR",
    score: ["A2", "B1", "B2", "C1 - C2"],
  },
];
export const textQuestion = ["Hospital", "Cinema", "School", "Park"];
export const pictureQuestion = [
  "They're reading the newspaper",
  "They're leaving the room",
  "They're standing near the table",
  "They're turning on the machine",
];
export const suggestData = [
  {
    uri: "https://cdn-icons-png.flaticon.com/512/8303/8303280.png",
    uriSize: 260,
    title: "Bắt đầu thôi nào!",
    content: "Bạn đang theo đuổi chứng chỉ nào?",
    option: getCerName(),
  },
  {
    uri: "https://cdn-icons-png.flaticon.com/512/1604/1604895.png",
    uriSize: 260,
    title: "Tiến thêm bước nữa!",
    content: "Bạn đang hướng đến cấp độ nào?",
    option: cerData[2].score,
  },
  {
    uri: "https://cdn-icons-png.flaticon.com/512/9888/9888830.png",
    uriSize: 260,
    title: "Question 1/20",
    content: "Where do we go to watch a movie?",
    option: textQuestion,
  },
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    uriSize: 320,
    title: "Question 17/20",
    content: "Choose the best description for the image:",
    option: pictureQuestion,
  },
];
