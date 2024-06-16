import { create } from "zustand";
export interface UserProps {
  email: string;
  password: string;
  isNewUser: boolean;
  name: string;
  role: string;
  currentTime: number;
  targetTime: number;
  createdCourses: number;
  targetCourses: number;
}
interface UserState {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
  logout: () => void;
}
export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: UserProps) => set({ user }),
  logout: () => set({ user: null }),
}));

export default UserProps;

export const ListUser = [
  {
    email: "a",
    password: "a",
    isNewUser: true,
    name: "User1",
    role: "Student",
    currentTime: 5,
    targetTime: 10,
    createdCourses: 0,
    targetCourses: 0,
  },
  {
    email: "user2",
    password: "password2",
    isNewUser: false,
    name: "User2",
    role: "Student",
    currentTime: 3,
    targetTime: 10,
    createdCourses: 2,
    targetCourses: 2,
  },
  {
    email: "user1",
    password: "password1",
    isNewUser: true,
    name: "User1",
    role: "Teacher",
    currentTime: 5,
    targetTime: 5,
    createdCourses: 1,
    targetCourses: 7,
  },
  // more users...
];
