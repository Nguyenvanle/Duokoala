import React, { useEffect, useState } from "react";
import { IButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { TwoOptionsAlert } from "@/components/CustomAlert";
import { getCerAims, useSuggestViewModel } from "@/models/suggestion/v-model";
import { SuggestScreen, suggest } from "@/screens/suggest/suggestScreen";
import { cerProps } from "@/screens/suggest/data";
import { SuggestRadioBG } from "@/components/RadioBG";

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
      <SuggestScreen
        uri={"https://cdn-icons-png.flaticon.com/512/1604/1604895.png"}
        uriSize={260}
        title={"Tiến thêm bước nữa!"}
        content={"Bạn đang hướng đến cấp độ nào?"}
      />

      <View style={suggest.decideFrame}>
        <View style={suggest.decide}>
          <SuggestRadioBG
            For="Purpose"
            Options={arrayOption}
            Default={viewModel.suggest?.aim ?? null}
          ></SuggestRadioBG>
        </View>
      </View>
      <View style={suggest.decideFrame}>
        <View style={suggest.decide}>
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
