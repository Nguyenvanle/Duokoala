import UserProps from "@/models/user/model";
import { useUserStore } from "./model";

const UserViewModel = () => {
  const store = useUserStore();

  return {
    user: store.user,
    setUser: (user: UserProps) => store.setUser(user),
    logOut: store.logout,
    addCourse: store.addCourse,
  };
};
export default UserViewModel;
