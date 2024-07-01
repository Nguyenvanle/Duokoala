import { useEffect, useState } from "react";
import * as Yup from "yup";

import { router } from "expo-router";
import { useUserViewModel } from "@/vms";

// validation sign in page
export const loginScherma = Yup.object().shape({
  email: Yup.string()
    .required("Vui lòng điền email đăng nhập!")
    .email("Vui lòng điền chính xác email đăng nhập!")
    .max(50, "Email tối đa 50 ký tự!"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có độ dài từ 6-32 ký tự!")
    .required("Vui lòng điền mật khẩu!")
    .max(30, "Mật khẩu phải có độ dài từ 6-32 kí tự!"),
});

// call hook in login page
export default function useSignInViewModel() {
  // const [showTrueAlert, setShowTrueAlert] = useState(false);
  // const [showErrorAlert, setShowErrorAlert] = useState(false);

  const signUpHandler = () => {
    router.push("/auth/signUp");
  };
  {
    /*hanler after get user, and set router */
  }

  return {
    signUpHandler,
  };
}
