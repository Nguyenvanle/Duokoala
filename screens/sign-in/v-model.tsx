import UserViewModel from "@/models/user/v-model";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { router } from "expo-router";
import useLoginStore from "../sign-in/model";
// use Login View model example
export const LoginViewModel = () => {
  const store = useLoginStore();

  return {
    checkUserInList: (email: string, password: string) =>
      store.checkUserInList(email, password),
  };
};

// validation sign in page
export const loginScherma = Yup.object().shape({
  email: Yup.string()
    .required("Không được bỏ trống email")
    .email("vui lòng nhập email đăng nhập")
    .max(50, "email tối đa 50 ký tự"),
  password: Yup.string()
    .min(6, "mật khẩu phải có độ dài 6-32 ký tự")
    .required("vui lòng nhập mật khẩu")
    .max(30, "mật khẩu phải có độ dài 6-32 kí tự"),
});

// call hook in login page
export default function useSignInViewModel() {
  const [showTrueAlert, setShowTrueAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userViewModel = UserViewModel();
  const loginViewModel = LoginViewModel();

  useEffect(() => {
    console.log("user được cập nhật lại:");
    console.log(userViewModel.user);
  }, [userViewModel.user]);

  const signInHandler = () => {
    console.log({ email, password });
    const userInList = loginViewModel.checkUserInList(email, password);
    console.log("tìm thấy user:");
    console.log(userInList);
    {
      /* find user and print alert*/
    }
    if (userInList) {
      userViewModel.setUser(userInList);
      setShowTrueAlert(true);
    } else {
      console.log("không tìm thấy user");
      setShowErrorAlert(true);
    }
  };
  const signUpHandler = () => {
    userViewModel.logOut();
    router.push("/auth/signUp");
  };
  {
    /*hanler after get user, and set router */
  }
  const confirmAlertHandler = () => {
    if (userViewModel.user?.isNewUser) {
      router.replace("/suggest");
    } else {
      router.replace("/tabs");
    }
    setShowTrueAlert(false);
  };

  return {
    setEmail,
    email,
    setPassword,
    password,
    signInHandler,
    showTrueAlert,
    confirmAlertHandler,
    showErrorAlert,
    setShowErrorAlert,
    signUpHandler,
  };
}
