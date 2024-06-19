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
    isNewUser: false,
    name: "Nguyễn Hưng Thịnh",
    role: "Student",
    currentTime: 5,
    targetTime: 10,
    createdCourses: 0,
    targetCourses: 0,
  },
  {
    email: "b",
    password: "b",
    isNewUser: true,
    name: "Nguyễn Lê Tiến Đạt",
    role: "Student",
    currentTime: 3,
    targetTime: 10,
    createdCourses: 2,
    targetCourses: 2,
  },
  {
    email: "c",
    password: "c",
    isNewUser: false,
    name: "Nguyễn Văn Lẹ",
    role: "Teacher",
    currentTime: 5,
    targetTime: 5,
    createdCourses: 1,
    targetCourses: 7,
  },
  {
    email: "d",
    password: "d",
    isNewUser: false,
    name: "Lê Dương Anh Tú",
    role: "Teacher",
    currentTime: 9,
    targetTime: 10,
    createdCourses: 9,
    targetCourses: 15,
  },
  // more users...
];
