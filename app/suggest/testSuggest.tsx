import React, { useEffect, useState } from "react";
import { IButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import {
  CombineAndRandom,
  getRandomArray,
  useSuggestViewModel,
  useTestViewModel,
} from "@/models/suggestion/v-model";
import {
  Confirm,
  questPhotoProps,
  questTextProps,
} from "@/screens/suggest/data";
import { AnswerRadioBG } from "@/components/RadioBG";
import CustomAlert from "@/components/CustomAlert";
import { router } from "expo-router";
import SuggestPage, { suggestStyle } from "@/screens/suggest/suggestScreen";

export default function MainSuggestion() {
  const {
    IPage,
    stateAnswer,
    ArrayQuestion,
    cautionNotConfirm,
    stateTitle,
    stateColor,
    ArrayLength,
    getUriSize,
    setCautionNotConfirm,
    handleNext,
  } = useTestViewModel();
  const uriSize = getUriSize();

  const suggestContent = {
    uri:
      ArrayQuestion[IPage].uri ??
      "https://cdn-icons-png.flaticon.com/512/671/671829.png",
    uriSize: uriSize,
    title: "Question " + (IPage + 1) + "/" + ArrayLength,
    content: ArrayQuestion[IPage].question,
  };

  const radioBG = {
    Options: ArrayQuestion[IPage].answer,
    Correct: ArrayQuestion[IPage].correctAnswer,
    Status: stateTitle == Confirm.title,
  };
  const buttons = [
    {
      color: Colors.blue.regular,
      name: "Số câu đúng: " + stateAnswer + "/" + (IPage + 1),
      isButton: false,
      handle: () => {},
    },
    {
      color: stateColor,
      name: stateTitle,
      isButton: true,
      handle: () => handleNext(),
    },
  ];

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <SuggestPage
        suggest={suggestContent}
        radioBG={radioBG}
        buttons={buttons}
      />
      <CustomAlert
        title={"Thông báo"}
        message={"Vui lòng chọn phương án!"}
        textButton={"Xác nhận"}
        icon={"https://cdn-icons-png.flaticon.com/512/9142/9142096.png"}
        isShow={cautionNotConfirm}
        color="red"
        handlerConfirm={function (): void {
          setCautionNotConfirm(false);
        }}
      />
      {/* </View> */}
    </ImageBackground>
  );
}
