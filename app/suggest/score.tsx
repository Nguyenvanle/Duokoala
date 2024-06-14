import React from "react";
import Suggest from "@/models/suggestion/v-model";

const imageUri: string =
  "https://cdn-icons-png.flaticon.com/512/1604/1604895.png";
export default function Score() {
  return (
    <Suggest
      uri={imageUri}
      uriSize={260}
      title={"Tiến thêm bước nữa?"}
      content={"Mục tiêu của bạn là cấp độ nào?"}
      option={["450 điểm", "650 điểm", "750 điểm", "900+ điểm"]}
      direct={"/suggest/question/direct"}
    ></Suggest>
  );
}
