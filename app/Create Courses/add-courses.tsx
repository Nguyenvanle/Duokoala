import {
  StyleSheet,
  Text,
  TextInputBase,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { TextInput } from "react-native-gesture-handler";

const imageURI: string =
  "https://www.flaticon.com/free-icon/koala_3069172?term=koala&page=1&position=5&origin=search&related_id=3069172";
export default function AddCourses() {
  return (
    <View>
      <FlaticonIcon uri={imageURI} size={290} />
      <View>
        <Text>TẠO KHÓA HỌC</Text>
      </View>
      <View>
        <View>
          <View>
            <TextInput placeholder="TÊN KHÓA HỌC"></TextInput>
          </View>
          <View>
            <TextInput placeholder="MÔ TẢ KHÓA HỌC"></TextInput>
          </View>
          <View>
            <TouchableOpacity>
              <TextInputBase placeholder="BÀI GIẢNG"></TextInputBase>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <TextInputBase placeholder="TÀI LIỆU THAM KHẢO"></TextInputBase>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <TextInputBase placeholder="BÀI TẬP"></TextInputBase>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity>
              <Text>TẠO</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>HỦY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
