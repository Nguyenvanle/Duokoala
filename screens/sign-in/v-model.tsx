import UserViewModel from "@/models/user/v-model";
import { useEffect, useState } from "react";
import LoginViewModel from "../login/v-model";
import { router } from "expo-router";

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
