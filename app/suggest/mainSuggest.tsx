import React, { useState } from "react";
import Button, { HrefButton, IButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { Suggest, suggestData } from "@/models/suggestion/v-model";
import { defaultStyles } from "@/constants/Styles";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Tabs, router } from "expo-router";
import { home } from "../tabs/homes/home";
import { index } from "..";
import CustomAlert, { TwoOptionsAlert } from "@/components/CustomAlert";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/8303/8303280.png";
export default function Mapping() {
  const [showAlert, setShowAlert] = useState(false);
  const [IPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    if (IPage <= suggestData.length) {
      setCurrentPage((prevIndex) => (prevIndex + 1) % suggestData.length);
      if (IPage == 1) setShowAlert(true);
    }
  };
  const handlePrevious = () => {
    if (IPage - 1 >= 0)
      setCurrentPage((prevIndex) => (prevIndex - 1) % suggestData.length);
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
          <TouchableOpacity onPress={() => handlePrevious()}>
            <IButton backgroundColor={Colors.blue.regular} title="Trở Lại" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNext()}>
            <IButton backgroundColor={Colors.green} title="Tiếp tục" />
          </TouchableOpacity>
        </View>
      </View>
      <TwoOptionsAlert
        title={"Thông báo"}
        message={"Bạn có muốn làm bài kiểm tra không?"}
        textButton={"Chấp nhận"}
        textCancel={"Từ chối"}
        icon={"https://cdn-icons-png.flaticon.com/512/3840/3840674.png"}
        isShow={showAlert}
        handlerConfirm={function (): void {
          setShowAlert(false);
          setCurrentPage((prevIndex) => (prevIndex + 1) % suggestData.length);
        }}
        handlerCancel={function (): void {
          setShowAlert(false);
          router.replace("/tabs/homes");
        }}
      />
    </ImageBackground>
  );
}
export const suggest = StyleSheet.create({
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
});
