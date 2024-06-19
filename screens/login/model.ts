import { create } from "zustand";
import UserProps, { ListUser } from "@/models/user/model";

interface LoginState {
  checkUserInList: (email: string, password: string) => UserProps | undefined;
}

const useLoginStore = create<LoginState>((set) => ({
  checkUserInList: (email: string, password: string) => {
    const userChecked = ListUser.find(
      (User) => User.email === email && User.password === password
    );
    return userChecked;
  },
}));

export default useLoginStore;
