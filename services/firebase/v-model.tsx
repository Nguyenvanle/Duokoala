// import { router, useSegments } from "expo-router";
// import {
//   User,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { auth, db } from "./config";
// import { useUserAuthStore, userConverter } from "./model";

// export const useAuthViewModel = () => {
//   const [isLoading, setLoading] = useState(false);

//   const currentPage = useSegments();
//   const isSignIn = currentPage.some((item) => item === "sign-in");

//   const { setUser, user, addUserToFirestore, logout } = useUserAuthStore();

//   useEffect(() => {
//     if (user && isSignIn) {
//       console.log(user.email + " was verified");
//       router.replace("/tabs");
//     }

//     console.log(user);
//   }, [user]);

//   useEffect(() => {
//     if (user) fetchUsers(user);
//   }, []);

//   const onLoginPress = (email: string, password: string) => {
//     login(email, password);
//   };

//   const fetchUsers = async (userIn: User) => {
//     try {
//       const querySnapshot = await getDocs(
//         collection(db, "users").withConverter(userConverter)
//       );
//       querySnapshot.forEach((doc) => {
//         const user = doc.data();
//         // Xử lý dữ liệu người dùng ở đây
//         if (userIn.uid === user.uid) {
//           setUser(user);
//           console.log("User fetch Success");
//         }
//       });
//     } catch (e) {
//       console.error("Error fetchUsers: ", e);
//     }
//   };

//   const register = async (email: string, password: string) => {
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       setUser(user);
//       console.log(user);
//       alert("Đăng ký thành công");
//     } catch (error: any) {
//       alert(error.message);
//     }
//     setLoading(false);
//   };

//   const login = async (email: string, password: string) => {
//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       setUser(user);
//       console.log(user);
//       alert("Login successful");
//     } catch (error: any) {
//       alert(error.message);
//     }
//     setLoading(false);
//   };

//   const updateDB = async () => {
//     if (user) {
//       addUserToFirestore(user);
//       console.log("user update success");
//     } else console.log("user null");
//   };

//   return {
//     user,
//     logout,
//     register,
//     login,

//     onLoginPress,
//     isLoading,
//     updateDB,
//   };
// };
