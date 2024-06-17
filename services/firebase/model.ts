import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, signOut } from "firebase/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { auth } from "./config";

interface UserAuthState {
  user: User | null;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useUserAuthStore = create<UserAuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
      logout: () => {
        signOut(auth), set({ user: null });
      },
    }),
    {
      name: "user-auth-storage", // tên của mục trong bộ nhớ (phải là duy nhất)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
