import React, { useState } from "react";
import Button, { HrefButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { suggest } from "./certificate";
import { Suggest, suggestData } from "@/models/suggestion/v-model";
import { defaultStyles } from "@/constants/Styles";
import { ImageBackground, View } from "react-native";
import { SuggestionModel } from "@/models/suggestion/model";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/8303/8303280.png";
export default function Mapping() {
  const [IPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    setCurrentPage((prevIndex) => (prevIndex + 1) % suggestData.length);
  };
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <Suggest
        uri={suggestData[IPage].uri}
        uriSize={suggestData[IPage].uriSize}
        title={suggestData[IPage].title}
        content={suggestData[IPage].content}
        option={suggestData[IPage].option}
      />
      <View style={suggest.decideFrame}>
        <View style={suggest.decide}>
          <Button backgroundColor={Colors.green} title="Trở lại" />
          <Button backgroundColor={Colors.blue.regular} title="Tiếp tục" />
        </View>
      </View>
    </ImageBackground>
  );
}
