import CustomAlert from "@/components/CustomAlert";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import {
  useHandlerButtonViewModel,
  useSynSuggest,
} from "@/models/suggestion/v-model";
import SuggestPage from "@/screens/suggest/suggestScreen";
import React from "react";
import { ImageBackground } from "react-native";

const suggestContent = {
  uri: "https://cdn-icons-png.flaticon.com/512/1604/1604895.png",
  uriSize: 260,
  title: "Tiến thêm bước nữa!",
  content: "Bạn đang hướng đến cấp độ nào?",
};

const BackRouter = "/suggest/cerSuggest";
const NextRouter = "/suggest/timeSuggest";

export default function MainSuggestion() {
  const viewModel = useSynSuggest();

  const {
    cautionNotConfirm,
    setCautionNotConfirm,
    NextHandler,
    AimsBackHandler,
    arrayOpsAims,
  } = useHandlerButtonViewModel();

  const radioBG = {
    For: "aim",
    Options: arrayOpsAims ?? [],
    Default: viewModel.suggest?.aim ?? null,
  };
  const buttons = [
    {
      color: Colors.blue.regular,
      name: "Trở lại",
      isButton: true,
      handle: () => AimsBackHandler(BackRouter),
    },
    {
      color: Colors.green,
      name: "Tiếp tục",
      isButton: true,
      handle: () => NextHandler(viewModel.suggest.aim, NextRouter),
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
        handlerConfirm={() => {
          setCautionNotConfirm(false);
        }}
      />
    </ImageBackground>
  );
}
