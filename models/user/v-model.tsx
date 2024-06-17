import { useUserStore } from "./model";
import UserProps from "@/models/user/model";

const UserViewModel = () => {
  const store = useUserStore();

  return {
    user: store.user,
    setUser: (user: UserProps) => store.setUser(user),
    logOut: store.logout,
  };
};
export default UserViewModel;
