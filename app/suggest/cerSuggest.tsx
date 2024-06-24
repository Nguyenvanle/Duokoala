import CustomAlert, { TwoOptionsAlert } from "@/components/CustomAlert";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import {
  getCerNames,
  useHandlerButtonViewModel,
  useSuggestViewModel,
} from "@/models/suggestion/v-model";
import { cerProps } from "@/screens/suggest/data";
import SuggestPage from "@/screens/suggest/suggestScreen";
import { ImageBackground } from "react-native";

const NextRouter = "/suggest/aimsSuggest";
const SkipRouter = "/suggest/timeSuggest";

export default function MainSuggestion() {
  const viewModel = useSuggestViewModel();

  const {
    cautionNotConfirm,
    setCautionNotConfirm,
    cautionSkip,
    setCautionSkip,
    CautionSkipHandler,
    SkipHandler,
    SetNullSuggest,
    NextHandler,
  } = useHandlerButtonViewModel();

  // const [statusTestAlert, setStatusTestAlert] = useState(false);
  const suggestContent = {
    uri: "https://cdn-icons-png.flaticon.com/512/8303/8303280.png",
    uriSize: 260,
    title: "Bắt đầu thôi nào!",
    content: "Bạn đang theo đuổi chứng chỉ nào?",
  };

  const radioBG = {
    For: "certificated",
    Options: getCerNames(cerProps) ?? [],
    Default: viewModel.suggest?.cer ?? null,
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
      handle: () => NextHandler(viewModel.suggest.cer, NextRouter),
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
        message={"Bạn thực sự không cần một mục tiêu chứng chỉ cụ thể?"}
        textButton={"Chắc chắn"}
        textCancel={"Hủy bỏ"}
        icon={"https://cdn-icons-png.flaticon.com/512/6724/6724206.png"}
        isShow={cautionSkip}
        handlerConfirm={() => {
          setCautionSkip(false);
          SetNullSuggest();
          SkipHandler(SkipRouter);
        }}
        handlerCancel={() => {
          setCautionSkip(false);
        }}
      />
    </ImageBackground>
  );
}
