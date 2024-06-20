import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./config";
import { useUserAuthStore } from "./model";

export const useAuthViewModel = () => {
  const [isLoading, setLoading] = useState(false);

  const { setUser, user } = useUserAuthStore();

  useEffect(() => {
    if (user) {
      console.log(user.email + " was verified");
      router.replace("/tabs");
    }
  }, [user, setUser]);

  const onLoginPress = (email: string, password: string) => {
    login(email, password);
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      console.log(user);
      alert("Đăng ký thành công");
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      console.log(user);
      alert("Login successful");
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  return {
    register,
    login,

    onLoginPress,
    isLoading,
  };
};
