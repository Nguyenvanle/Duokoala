import { CourseProps, coursesData } from "@/models/course/model";
import { create } from "zustand";
import { showLogoDuration } from "@/screens/index/v-model";
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
    const userchecked = ListUser.find(
      (User) => User.email === email && User.password === password
    );
    return userchecked;
  },
}));

export default useLoginStore;
