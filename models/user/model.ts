import { auth } from "@/services/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export interface UserProps {
  id: string; //id duy nhất của người dùng
  email: string; // email đăng ký
  isNewUser: boolean; // có phải người dùng mới
  name: string; // tên của người dùng
  role: string; // chức vụ của người dùng
  currentTime: number; // thời gian học hiện tại của người dùng
  targetTime: number; // thời gian học dự kiến của người dùng
  avatarUrl: string; // URL ảnh đại diện của người dùng
  phoneNumber?: string; // Số điện thoại của người dùng
  dateOfBirth?: Date; // Ngày sinh của người dùng
  gender?: "male" | "female" | "other"; // Giới tính của người dùng
  address?: string; // Địa chỉ của người dùng
  registrationDate: Date; // Ngày đăng ký tài khoản
  lastLoginDate: Date; // Ngày đăng nhập cuối cùng
  coursesEnrolled: string[]; // Danh sách các khóa học đã đăng ký
  progress: { [courseId: string]: number }; // Tiến độ học tập theo khóa học
  completedCourses: string[]; // Danh sách các khóa học đã hoàn thành
  subscriptionType?: "free" | "premium"; // Loại gói đăng ký
  preferences?: { [key: string]: any }; // Các tùy chọn cá nhân hóa
  notificationsEnabled: boolean; // Trạng thái bật/tắt thông báo
}

export interface UserRegisterProps {
  name: string;
  email: string;
  password: string;
}
interface UserState {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
  logout: () => void;
  // addCourse: () => void;
}
export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: UserProps | null) => set({ user }),
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "user-auth-storage", // tên của mục trong bộ nhớ (phải là duy nhất)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export default UserProps;
