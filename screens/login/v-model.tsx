import useLoginStore from "./model";
import UserProps from "@/models/user/model";

const LoginViewModel = () => {
  const store = useLoginStore();

  return {
    user: store.user,
    setUser: (user: UserProps) => store.setUser(user),
    logOut: store.logout,
    checkUserInList: (email: string, password: string) =>
      store.checkUserInList(email, password),
  };
};
export default LoginViewModel;
