import CustomAlert, { TwoOptionsAlert } from "@/components/CustomAlert";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import {
  useHandlerButtonViewModel,
  useSuggestViewModel,
} from "@/models/suggestion/v-model";
import { timeProps } from "@/screens/suggest/data";

import SuggestPage from "@/screens/suggest/suggestScreen";
import { router } from "expo-router";

import React from "react";
import { ImageBackground } from "react-native";

const SkipRouter = "/suggest/testSuggest";

export default function MainSuggestion() {
  const viewModel = useSuggestViewModel();

  const {
    cautionNotConfirm,
    setCautionNotConfirm,
    CautionSkipHandler,
    SetTimeNull,
    TimeNextHandler,
    setCautionSkip,
    SkipHandler,
    cautionSkip,
    statusTestAlert,
    setStatusTestAlert,
  } = useHandlerButtonViewModel();

  const suggestContent = {
    uri: "https://cdn-icons-png.flaticon.com/512/601/601108.png",
    uriSize: 260,
    title: "Làm chủ thời gian!",
    content: "Mỗi ngày bạn muốn học bao lâu?",
  };
  const radioBG = {
    For: "time",
    Options: timeProps ?? [],
    Default: null,
  };
  const buttons = [
    {
      color: Colors.red,
      name: "Bỏ qua",
      isButton: true,
      handle: () => CautionSkipHandler(),
    },
    {
      color: Colors.green,
      name: "Tiếp tục",
      isButton: true,
      handle: () => TimeNextHandler(SkipRouter),
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
        message={"Bạn chưa chọn phương án nào cả!"}
        textButton={"Xác nhận"}
        icon={"https://cdn-icons-png.flaticon.com/512/9142/9142096.png"}
        isShow={cautionNotConfirm}
        color={"red"}
        handlerConfirm={function (): void {
          setCautionNotConfirm(false);
        }}
      />

      {/* Button Skip */}
      <TwoOptionsAlert
        title={"Thông báo"}
        message={"Bạn thực sự không cần mục tiêu thời gian học tập?"}
        textButton={"Chắc chắn"}
        textCancel={"Hủy bỏ"}
        icon={"https://cdn-icons-png.flaticon.com/512/6724/6724206.png"}
        isShow={cautionSkip}
        handlerConfirm={() => {
          setCautionSkip(false);
          SetTimeNull();
          setStatusTestAlert(true);
        }}
        handlerCancel={() => {
          setCautionSkip(false);
        }}
      />
      <TwoOptionsAlert
        title={"Kiểm tra năng lực!"}
        message={
          "Bạn có muốn thực hiện một bài kiểm tra nhỏ để xác định năng lực không?"
        }
        textButton={"Chấp nhận"}
        textCancel={"Từ chối"}
        icon={"https://cdn-icons-png.flaticon.com/512/10517/10517234.png"}
        isShow={statusTestAlert}
        handlerConfirm={function (): void {
          setStatusTestAlert(false);
          SkipHandler(SkipRouter);
        }}
        handlerCancel={function (): void {
          setStatusTestAlert(false);
          router.replace("/tabs/homes");
        }}
      />
    </ImageBackground>
  );
}
