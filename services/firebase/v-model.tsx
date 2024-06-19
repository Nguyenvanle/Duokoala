import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./config";
import { useUserAuthStore } from "./model";

export const useAuthViewModel = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, user } = useUserAuthStore();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "19854476990-rnstnhsjfq4g4s0f78gpdjg838i32u16.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (user) {
      console.log(user.email + " was verified");
      router.replace("/tabs");
    }
  }, [user, setUser]);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          setUser(userCredential.user);
          console.log("User signed in:", userCredential.user);
        })
        .catch((error) => {
          console.error("Error signing in with Google:", error);
        });
    }
  }, [response, setUser]);

  const onLoginPress = () => {
    login(email, password);
  };

  const onGoogleLoginPress = () => {
    promptAsync();
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
    email,
    setEmail,
    password,
    setPassword,
    onLoginPress,
    onGoogleLoginPress,
    isLoading,
  };
};
