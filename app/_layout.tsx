import Colors from "@/constants/Colors";
import { auth } from "@/services/firebase";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function RootLayout() {
  // useEffect(() => {
  //   // Lấy Access Token của người dùng đã đăng nhập
  //   const user = auth.currentUser;
  //   if (user) {
  //     user
  //       .getIdToken()
  //       .then((idToken) => {
  //         // Sử dụng idToken làm Access Token cho Firestore REST API
  //         const API_ENDPOINT = `https://firestore.googleapis.com/v1/projects/envi-survey/databases/(default)/documents/courses`;

  //         fetch(API_ENDPOINT, {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${idToken}`,
  //           },
  //         })
  //           .then((response) => response.json())
  //           .then((data) => console.log(data))
  //           .catch((error) => console.error(error));
  //       })
  //       .catch((error) => {
  //         console.error("Lỗi khi lấy Access Token:", error);
  //       });
  //   } else {
  //     // Chuyển hướng người dùng đến trang đăng nhập
  //     router.replace("/sign-in");
  //   }
  // }, []);

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ statusBarColor: Colors.black }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="suggest" options={{ headerShown: false }} />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
