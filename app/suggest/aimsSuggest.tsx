import { IButton } from "@/components/Button";
import { TwoOptionsAlert } from "@/components/CustomAlert";
import { SuggestRadioBG } from "@/components/RadioBG";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getCerAims, useSuggestViewModel } from "@/models/suggestion/v-model";
import { cerProps } from "@/screens/suggest/data";
import { SuggestContent, decideScreen } from "@/screens/suggest/suggestScreen";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";

export default function MainSuggestion() {
  const [showAlert, setShowAlert] = useState(false);
  const [arrayOption, setArrayOptions] = useState<string[]>([]);
  const viewModel = useSuggestViewModel();

  useEffect(() => {
    setArrayOptions(getCerAims(cerProps, viewModel.suggest?.cer));

    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: null,
      score: null,
    });
  }, [viewModel.suggest?.cer]);

  const handleNext = () => {
    setShowAlert(true);
  };
  const handlePrevious = () => {
    router.replace(`/suggest/cerSuggest`);
  };
  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <SuggestContent
        uri={"https://cdn-icons-png.flaticon.com/512/1604/1604895.png"}
        uriSize={260}
        title={"Tiến thêm bước nữa!"}
        content={"Bạn đang hướng đến cấp độ nào?"}
      />

      <View style={decideScreen.decideFrame}>
        <View style={decideScreen.decideValue}>
          <SuggestRadioBG
            For="Purpose"
            Options={arrayOption}
            Default={viewModel.suggest?.aim ?? null}
          ></SuggestRadioBG>
        </View>
      </View>
      <View style={decideScreen.decideFrame}>
        <View style={decideScreen.decideValue}>
          <TouchableOpacity onPress={() => handlePrevious()}>
            <IButton backgroundColor={Colors.blue.regular} title="Trở Lại" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNext()}>
            <IButton backgroundColor={Colors.green} title="Xác nhận" />
          </TouchableOpacity>
        </View>
      </View>

      <TwoOptionsAlert
        title={"Kiểm tra năng lực!"}
        message={
          "Bạn có muốn thực hiện một bài kiểm tra nhỏ để xác định năng lực không?"
        }
        textButton={"Chấp nhận"}
        textCancel={"Từ chối"}
        icon={"https://cdn-icons-png.flaticon.com/512/10517/10517234.png"}
        isShow={showAlert}
        handlerConfirm={function (): void {
          setShowAlert(false);
          router.replace(`/suggest/testSuggest`);
        }}
        handlerCancel={function (): void {
          setShowAlert(false);
          router.replace("/tabs/homes");
        }}
      />
    </ImageBackground>
  );
}
