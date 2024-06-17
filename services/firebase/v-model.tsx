import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useUserAuthStore } from "./model";
import { auth } from "./config";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export const useAuthViewModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, user } = useUserAuthStore();

  useEffect(() => {
    observeAuthState();
    if (user !== null) router.replace("/tabs");
  }, [user]);

  const onLoginPress = () => {
    login(email, password);
  };

  const register = async (email: string, password: string) => {
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
  };

  const login = async (email: string, password: string) => {
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
  };

  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  return {
    register,
    login,
    observeAuthState,
    email,
    setEmail,
    password,
    setPassword,
    onLoginPress,
  };
};
