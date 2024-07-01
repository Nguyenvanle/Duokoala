import { create } from "zustand";
import UserProps, { ListUser } from "@/models/user/model";

interface SignUpState {
  registerUser: (
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ) => void;
}

const useLoginStore = create<SignUpState>((set) => ({
  registerUser: (
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ) => {},
}));

export default useLoginStore;
