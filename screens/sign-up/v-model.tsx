import { useState } from "react";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase/config";
import { router } from "expo-router";
import UserViewModel from "@/models/user/v-model";
// validation
export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email")
    .max(50, "email không quá 50 ký tự"),
  name: Yup.string()
    .required("Vui lòng nhập tên của bạn")
    .min(6, "tên phải có độ dài từ 6-32 ký tự")
    .max(32, "tên phải có độ dài từ 6-32 ký tự"),
  password: Yup.string()
    .required("vui lòng nhập mật khẩu")
    .min(6, "mật khẩu phải có đô dài từ 6-32 ký tự")
    .max(32, "mật khẩu phải có độ dài từ 6-32 ký tự"),
  confirmPassword: Yup.string()
    .required("vui lòng xác nhận lại mật khẩu")
    .max(32, "mật khẩu phải có độ dài từ 6-32 ký tự")
    .oneOf([Yup.ref("password")], "Không khớp với mật khẩu"),
});

//sign up to firebase
export const useSignupViewModel = () => {
  const [loading, setLoading] = useState(false);
  const viewModel = UserViewModel();
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //await sendEmailVerification(user);
      setLoading(false);
      //   alert(
      //     "Vui lòng xác minh email của bạn bằng cách nhấp vào liên kết xác minh đã được gửi đến email của bạn."
      //   );
      return user;
    } catch {
      setLoading(false);
    }
  };

  const addUserToFirestore = async (
    uid: string,
    email: string,
    name: string
  ) => {
    try {
      await setDoc(doc(db, "users", uid), {
        email: email,
        name: name,
        role: "Student",
        currentTime: 0,
        targetTime: 0,
        createdCourses: 0,
        targetCourses: 0,
      });
    } catch (err) {
      throw err;
    }
  };
  const handleSignUp = async (
    value: signUpFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const user = await signUp(value.email, value.password);

      if (user) {
        await addUserToFirestore(user.uid, value.email, value.name);
        alert("Đăng ký và xác minh email thành công");

        viewModel.setUser({
          email: value.email,
          password: "",
          isNewUser: true,
          name: value.name,
          role: "Student",
          currentTime: 0,
          targetTime: 0,
          createdCourses: 0,
          targetCourses: 0,
        });
        router.replace("/auth/intro");
        resetForm();
      } else {
        alert("Email đã tồn tại vui lòng nhập email khác");
      }
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };
  return {
    signUp,
    addUserToFirestore,
    loading,
    handleSignUp,
  };
};

interface signUpFormValues {
  email: string;
  password: string;
  name: string;
}
