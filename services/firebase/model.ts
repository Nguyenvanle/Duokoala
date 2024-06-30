// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { User, signOut } from "firebase/auth";
// import {
//   DocumentData,
//   FirestoreDataConverter,
//   QueryDocumentSnapshot,
//   SnapshotOptions,
//   addDoc,
//   collection,
// } from "firebase/firestore";
// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";
// import { auth, db } from "./config";

// interface UserAuthState {
//   user: User | null;
//   setUser: (user: User) => void;
//   logout: () => void;
//   addUserToFirestore: (user: User) => Promise<void>;
// }

// export const useUserAuthStore = create<UserAuthState>()(
//   persist(
//     (set, get) => ({
//       user: null,
//       setUser: (user: User | null) => set({ user }),
//       logout: () => {
//         signOut(auth), set({ user: null });
//       },
//       addUserToFirestore: async (user: User) => {
//         try {
//           const docRef = await addDoc(collection(db, "users"), get().user);
//           console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//           console.error("Error adding document: ", e);
//         }
//       },
//     }),
//     {
//       name: "user-auth-storage", // tên của mục trong bộ nhớ (phải là duy nhất)
//       storage: createJSONStorage(() => AsyncStorage),
//     }
//   )
// );

// export const userConverter: FirestoreDataConverter<User> = {
//   toFirestore(user: User): DocumentData {
//     return {
//       uid: user.uid,
//       email: user.email,
//       displayName: user.displayName,
//       photoURL: user.photoURL,
//       emailVerified: user.emailVerified,
//       phoneNumber: user.phoneNumber,
//       // Thêm các thuộc tính khác nếu cần
//     };
//   },
//   fromFirestore(
//     snapshot: QueryDocumentSnapshot,
//     options: SnapshotOptions
//   ): User {
//     const data = snapshot.data(options)!;
//     return {
//       uid: data.uid,
//       email: data.email,
//       displayName: data.displayName,
//       photoURL: data.photoURL,
//       emailVerified: data.emailVerified,
//       phoneNumber: data.phoneNumber,
//       // Thêm các thuộc tính khác nếu cần
//     } as User;
//   },
// };
