import React, { useEffect, useState } from "react";
import { IButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import {
  CombineAndRandom,
  getRandomArray,
  useSuggestViewModel,
} from "@/models/suggestion/v-model";
import { questPhotoProps, questTextProps } from "@/screens/suggest/data";
import { AnswerRadioBG } from "@/components/RadioBG";
import CustomAlert from "@/components/CustomAlert";
import { router } from "expo-router";
import { suggestStyle } from "@/screens/suggest/suggestScreen";

const TextQuestion = getRandomArray(3, questTextProps);
const PhotoQuestion = getRandomArray(4, questPhotoProps);
const ArrayQuestion = CombineAndRandom(TextQuestion, PhotoQuestion);
const length = ArrayQuestion.length;

export default function MainSuggestion() {
  const [IPage, setCurrentPage] = useState(0);
  const [Correct, setCorrect] = useState(0);
  const [StatusButton, setStatusButton] = useState(true);
  const [cautionAlert, setCautionAlert] = useState(false);
  const viewModel = useSuggestViewModel();

  const getUriSize = () => {
    if (ArrayQuestion[IPage].uri) return 320;
    return 260;
  };
  const handleNext = () => {
    setCurrentPage((prevIndex) => prevIndex + 1);
    setStatusButton(true);
    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: viewModel.suggest?.aim ?? null,
      score: null,
    });
  };
  const handleComplete = () => {
    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: viewModel.suggest?.aim ?? null,
      score: Correct / IPage,
    });
    router.replace(`/tabs/homes`);
  };
  const handleConfirm = () => {
    if (!viewModel.suggest?.score) {
      setCautionAlert(true);
      return;
    }
    setStatusButton(false);
    if (viewModel.suggest?.score === ArrayQuestion[IPage].correctAnswer)
      setCorrect(Correct + 1);
  };
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      {/* <SuggestScreen
        uri={
          ArrayQuestion[IPage].uri ??
          "https://cdn-icons-png.flaticon.com/512/671/671829.png"
        }
        uriSize={getUriSize()}
        title={"Question " + (IPage + 1) + "/" + length}
        content={ArrayQuestion[IPage].question}
      />
      <View style={suggestStyle.decideFrame}>
        <View style={suggestStyle.decide}>
          <AnswerRadioBG
            Options={ArrayQuestion[IPage].answer}
            Correct={ArrayQuestion[IPage].correctAnswer}
            Status={StatusButton}
          ></AnswerRadioBG>
        </View>
      </View>
      <View style={suggest.decideFrame}>
        <View style={suggest.decide}>
          <IButton
            backgroundColor={Colors.blue.regular}
            title={"Số câu làm đúng: " + Correct + "/" + (IPage + 1)}
          />
          {StatusButton ? (
            <TouchableOpacity onPress={() => handleConfirm()}>
              <IButton backgroundColor={Colors.teal} title={"Xác nhận chọn"} />
            </TouchableOpacity>
          ) : IPage < length - 1 ? (
            <TouchableOpacity onPress={() => handleNext()}>
              <IButton backgroundColor={Colors.green} title="Câu tiếp theo" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleComplete()}>
              <IButton backgroundColor={Colors.red} title="Hoàn Thành" />
            </TouchableOpacity>
          )}
        </View> */}

      <CustomAlert
        title={"Thông báo"}
        message={"Vui lòng chọn phương án!"}
        textButton={"Xác nhận"}
        icon={"https://cdn-icons-png.flaticon.com/512/9142/9142096.png"}
        isShow={cautionAlert}
        handlerConfirm={function (): void {
          setCautionAlert(false);
        }}
      />
      {/* </View> */}
    </ImageBackground>
  );
}
