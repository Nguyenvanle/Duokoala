import { User } from "firebase/auth";
import { create } from "zustand";

interface UserAuthState {
  user: User | null;
  setUser: (user: any) => void;
}

export const useUserAuthStore = create<UserAuthState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
