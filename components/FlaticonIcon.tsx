import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, LogBox } from "react-native";

//model
interface FlaticonIconProps {
  size: number;
  uri: string;
}
export function FlaticonIcon(props: FlaticonIconProps) {
  // view-model
  const { size, uri } = props; // lấy dữ liệu từ đưa vào trang chính (props)
  const [hasError, setHasError] = useState(false); // kiểm tra uri có lỗi không, mặc định là false

  useEffect(() => {
    // dùng useEffect khi muốn xử lý những vấn đề liên quan đến "cập nhật"
    setHasError(false); //cập nhật lại hàm kiểm tra lỗi khi thay đổi uri
  }, [uri]); //phụ thuộc vào sự thay đổi uri đầu vào

  // useEffect sẽ lắng nghe sự thay đổi của uri, từ đó cập nhật lại hàm kiểm tra lỗi

  //model
  return (
    <>
      {hasError ? (
        <ActivityIndicator style={{ width: size, height: size }} /> // hiển thị nút loading
      ) : (
        <Image
          source={{
            uri: uri,
          }}
          style={{
            width: size,
            height: size,
          }}
          onError={() => {
            setHasError(true);
            throw new Error("Uri Incorrect \n" + uri);
          }}
        />
      )}
    </>
  );
}
