import * as Yup from "yup";

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
