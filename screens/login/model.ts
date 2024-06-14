import { create } from "zustand";
import UserProps, { ListUser } from "@/models/user/model";

interface LoginState {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
  logout: () => void;
  checkUserInList: (email: string, password: string) => UserProps | undefined;
}

const useLoginStore = create<LoginState>((set) => ({
  user: null,
  setUser: (user: UserProps) => set({ user }),
  logout: () => set({ user: null }),
  checkUserInList: (email: string, password: string) => {
    const userChecked = ListUser.find(
      (User) => User.email === email && User.password === password
    );
    return userChecked;
  },
}));

export default useLoginStore;
