// export default function MainSuggestion() {
//   const viewModel = useSuggestViewModel();
//   const [statusConfirmAlert, setStatusConfirmAlert] = useState(false);
//   const [statusSkipAlert, setStatusSkipAlert] = useState(false);
//   const [statusTestAlert, setStatusTestAlert] = useState(false);

import CustomAlert, { TwoOptionsAlert } from "@/components/CustomAlert";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getCerNames, useSuggestViewModel } from "@/models/suggestion/v-model";
import { cerProps } from "@/screens/suggest/data";
import SuggestPage from "@/screens/suggest/suggestScreen";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground } from "react-native";

//   const handleConfirm = () => {
//     if (viewModel.suggest?.cer) router.replace(`/suggest/aimsSuggest`);
//     else setStatusConfirmAlert(true);
//   };
//   const handleSkip = () => {
//     setStatusSkipAlert(true);
//   };
//   return (
//     <ImageBackground
//       source={require("@/assets/images/radiant-bg.png")}
//       style={defaultStyles.pageContainer}
//     >
//       <SuggestScreen
//         uri={"https://cdn-icons-png.flaticon.com/512/8303/8303280.png"}
//         uriSize={260}
//         title={"Bắt đầu thôi nào!"}
//         content={"Bạn đang theo đuổi chứng chỉ nào?"}
//       />
//       <View style={suggest.decideFrame}>
//         <View style={suggest.decide}>
//           <SuggestRadioBG
//             For="certificated"
//             Options={getCerNames(cerProps)}
//             Default={viewModel.suggest?.cer ?? null}
//           ></SuggestRadioBG>
//         </View>
//       </View>
//       <View style={suggest.decideFrame}>
//         <View style={suggest.decide}>
//           <TouchableOpacity onPress={() => handleSkip()}>
//             <IButton backgroundColor={Colors.red} title="Bỏ qua" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleConfirm()}>
//             <IButton backgroundColor={Colors.green} title="Xác nhận" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <CustomAlert
//         title={"Thông báo"}
//         message={"Bạn chưa chọn phương án nào cả!"}
//         textButton={"Xác nhận"}
//         icon={"https://cdn-icons-png.flaticon.com/512/9142/9142096.png"}
//         isShow={statusConfirmAlert}
//         handlerConfirm={function (): void {
//           setStatusConfirmAlert(false);
//         }}
//       />

//       <TwoOptionsAlert
//         title={"Thông báo"}
//         message={"Bạn thực sự không cần một mục tiêu chứng chỉ cụ thể?"}
//         textButton={"Chắc chắn"}
//         textCancel={"Hủy bỏ"}
//         icon={"https://cdn-icons-png.flaticon.com/512/6724/6724206.png"}
//         isShow={statusSkipAlert}
//         handlerConfirm={function (): void {
//           setStatusSkipAlert(false);
//           viewModel.setSuggest({
//             cer: null,
//             aim: null,
//             score: null,
//           });
//           setStatusTestAlert(true);
//         }}
//         handlerCancel={function (): void {
//           setStatusSkipAlert(false);
//         }}
//       />

//       <TwoOptionsAlert
//         title={"Kiểm tra năng lực!"}
//         message={
//           "Bạn có muốn thực hiện một bài kiểm tra nhỏ để xác định năng lực không?"
//         }
//         textButton={"Chấp nhận"}
//         textCancel={"Từ chối"}
//         icon={"https://cdn-icons-png.flaticon.com/512/10517/10517234.png"}
//         isShow={statusTestAlert}
//         handlerConfirm={function (): void {
//           setStatusTestAlert(false);
//           router.replace(`/suggest/testSuggest`);
//         }}
//         handlerCancel={function (): void {
//           setStatusTestAlert(false);
//           router.replace("/tabs/homes");
//         }}
//       />
//     </ImageBackground>
//   );
// }
export default function MainSuggestion() {
  const viewModel = useSuggestViewModel();
  const [statusConfirmAlert, setStatusConfirmAlert] = useState(false);
  const [statusSkipAlert, setStatusSkipAlert] = useState(false);
  const [statusTestAlert, setStatusTestAlert] = useState(false);

  const NextHandler = () => {
    if (viewModel.suggest?.cer) router.replace(`/suggest/aimsSuggest`);
    else setStatusConfirmAlert(true);
  };

  const SkipHandle = () => {
    setStatusSkipAlert(true);
  };

  const cerName = getCerNames(cerProps) ?? [];
  const defaultValue = viewModel.suggest?.cer ?? null;

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <SuggestPage
        suggest={{
          uri: "https://cdn-icons-png.flaticon.com/512/8303/8303280.png",
          uriSize: 260,
          title: "Bắt đầu thôi nào!",
          content: "Bạn đang theo đuổi chứng chỉ nào?",
        }}
        bGroup={{
          For: "certificated",
          Options: cerName,
          Default: defaultValue,
        }}
        handler={{
          LHandler: {
            color: Colors.red,
            name: "Bỏ qua",
            isButton: true,
            handle: () => SkipHandle(),
          },

          RHandler: {
            color: Colors.green,
            name: "Tiếp tục",
            isButton: true,
            handle: () => NextHandler(),
          },
        }}
      ></SuggestPage>

      <CustomAlert
        title={"Thông báo"}
        message={"Bạn chưa chọn phương án nào cả!"}
        textButton={"Xác nhận"}
        icon={"https://cdn-icons-png.flaticon.com/512/9142/9142096.png"}
        isShow={statusConfirmAlert}
        handlerConfirm={function (): void {
          setStatusConfirmAlert(false);
        }}
      />

      <TwoOptionsAlert
        title={"Thông báo"}
        message={"Bạn thực sự không cần một mục tiêu chứng chỉ cụ thể?"}
        textButton={"Chắc chắn"}
        textCancel={"Hủy bỏ"}
        icon={"https://cdn-icons-png.flaticon.com/512/6724/6724206.png"}
        isShow={statusSkipAlert}
        handlerConfirm={function (): void {
          setStatusSkipAlert(false);
          viewModel.setSuggest({
            cer: null,
            aim: null,
            score: null,
          });
          setStatusTestAlert(true);
        }}
        handlerCancel={function (): void {
          setStatusSkipAlert(false);
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
          router.replace(`/suggest/testSuggest`);
        }}
        handlerCancel={function (): void {
          setStatusTestAlert(false);
          router.replace("/tabs/homes");
        }}
      />
    </ImageBackground>
  );
}
