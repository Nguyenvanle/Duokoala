import { StyleSheet } from "react-native";
import React from "react";
import { index } from "@/app/index";
import Colors from "@/constants/Colors";
import Suggest from "@/models/suggestion/v-model";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/8303/8303280.png";
export default function Certificate() {
  return (
    <Suggest
      uri={imageUri}
      uriSize={260}
      title={"Bắt đầu thôi nào"}
      content={"Bạn đang theo đuổi chứng chỉ nào?"}
      option={["TOEIC", "IELTS", "VSTEP", "CEFR"]}
      direct={"/suggest/score"}
    ></Suggest>
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
