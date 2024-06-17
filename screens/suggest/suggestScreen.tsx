import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { index } from "@/app/index";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { SuggestRadioBG } from "@/components/RadioBG";

interface SuggestPage {
  uri: string;
  uriSize: number;
  title: string;
  content: string;
}
export function SuggestScreen(props: SuggestPage) {
  const { uri, uriSize, title, content } = props;

  return (
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
    </View>
  );
}
//< - - - - - - - - - - - - - - - - - - - - >//

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

//< - - - - - - - - - - - - - - - - - - - - >//

export const overflowLogo = StyleSheet.create({
  container: {
    flex: 0,
    overflow: "hidden", // Cắt icon nếu nó vượt quá kích thước khung
    maxHeight: 260,
    alignItems: "center",
    justifyContent: "center",
  },
});
