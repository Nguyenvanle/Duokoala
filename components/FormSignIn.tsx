import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { LoginViewModel, loginScherma } from "@/screens/sign-in/v-model";
import { useAuthViewModel } from "@/services/firebase/v-model";
import { Formik } from "formik";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const FormSignIn = () => {
  const { onLoginPress, isLoading } = useAuthViewModel();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginScherma}
      onSubmit={(value) => {
        onLoginPress(value.email, value.password);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={container.input}>
          <Text style={text.subTitle}>Email</Text>
          <TextInput
            style={{
              ...input.normal,
              borderColor:
                errors.email && touched.email ? Colors.red : Colors.blue.text,
              color:
                errors.email && touched.email ? Colors.red : Colors.blue.text,
            }}
            placeholder={"kola@gmail.com"}
            placeholderTextColor={Colors.mute}
            onChangeText={handleChange("email")}
            value={values.email}
            secureTextEntry={false}
            autoCapitalize="none"
          />

          {errors.email && touched.email && (
            <Text style={signIn.errorText}>{errors.email}</Text>
          )}

          {/* pass container */}
          <View style={signIn.passContainer}>
            <Text style={text.subTitle}>Mật khẩu</Text>

            <TouchableOpacity style={signIn.forgotContainer}>
              <Text style={signIn.passLinkText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={{
              ...input.normal,
              borderColor:
                errors.password && touched.password
                  ? Colors.red
                  : Colors.blue.text,
              color:
                errors.password && touched.password
                  ? Colors.red
                  : Colors.blue.text,
            }}
            placeholder={"matkhau123"}
            placeholderTextColor={Colors.mute}
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          {errors.password && touched.password && (
            <Text style={signIn.errorText}>{errors.password}</Text>
          )}
          <TouchableOpacity
            style={container.button}
            //onPress={() => onLoginPress()}
            onPress={handleSubmit as any}
          >
            {isLoading ? (
              <ActivityIndicator size={"large"} color={"white"} />
            ) : (
              <Text style={[text.btnText, { color: Colors.light }]}>
                ĐĂNG NHẬP
              </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default FormSignIn;

const container = StyleSheet.create({
  input: {
    alignItems: "flex-start",
    gap: 5,
    flex: 0,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: Colors.blue.regular,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.blue.text,
    height: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    marginTop: 10,
  },
});
const input = StyleSheet.create({
  normal: {
    ...text.mainContent,
    textAlign: "left",
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    height: 50,
    paddingLeft: 20,
    alignSelf: "stretch",
  },
});

export const signIn = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",

    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: -1,
  },
  passContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  errorText: {
    ...text.note,
    color: Colors.red,

    marginLeft: 1,
  },
  passLinkText: {
    ...text.link,
    height: "100%",
    textAlignVertical: "center",
  },
  forgotContainer: {
    flex: 0,
    alignSelf: "stretch",
    flexDirection: "row",
  },
});
