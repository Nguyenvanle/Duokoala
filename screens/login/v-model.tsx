import useLoginStore from "./model";
import UserProps from "@/models/user/model";

const LoginViewModel = () => {
  const store = useLoginStore();

  return {
    checkUserInList: (email: string, password: string) =>
      store.checkUserInList(email, password),
  };
};
export default LoginViewModel;
