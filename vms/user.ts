import UserProps, {
  UserRegisterProps,
  useUserStore,
} from "@/models/user/model";
import { ViewModel } from "./viewmodel";
import { UserRepository } from "@/services/repositories";
import { useEffect, useState } from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/services/firebase";
import { router } from "expo-router";
import { doc, setDoc } from "firebase/firestore";

export class UserViewModel extends ViewModel<UserProps> {
  constructor() {
    super(new UserRepository());
  }
}

export function useUserViewModel() {
  const { user, setUser, logout } = useUserStore();
  // const [user, setUser] = useState<UserProps | null>();
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [isFetch, setIsFetch] = useState<number>(1);
  const userViewModel = new UserViewModel();
  const defaultImageUser =
    "https://cdn-icons-png.flaticon.com/512/2424/2424348.png";
  useEffect(() => {
    setIsFetch(isFetch + 1);
    console.log("state user: " + user?.email);
  }, [user]);
  const fetchUser = async (id: string) => {
    return await userViewModel
      .getItemById(id)
      .then((user) => {
        if (user) {
          setUser(user);
          setIsFetch(isFetch + 1);
          console.log("fetch user " + user.id);
        } else {
          alert("Find error in fetch user");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //đăng ký người dùng trên fire auth
  const registerUserOnFireAuth = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userRegister = userAuth.user;
      return userRegister.uid;
    } catch (error) {
      alert("Email đã tồn tại, vui lòng chọn email khác");
    } finally {
      setLoading(false);
    }
  };
  //tạo cơ sở dữ liệu trên fire store từ id có sẵn
  const createUserOnFireStore = async (
    id: string,
    name: string,
    email: string
  ) => {
    setLoading(true);
    try {
      const newUser: UserProps = {
        id: id,
        email: email,
        isNewUser: true,
        name: name,
        role: "Student",
        phoneNumber: "",
        gender: "other",
        subscriptionType: "free",
        currentTime: 0,
        targetTime: 1,
        address: "",
        avatarUrl: defaultImageUser,
        registrationDate: new Date(),
        lastLoginDate: new Date(),
        coursesEnrolled: [],
        progress: {},
        preferences: {},
        completedCourses: [],
        notificationsEnabled: false,
      };

      const userDocRef = doc(db, "users", id);
      await setDoc(userDocRef, {
        ...newUser,
      });

      console.log("User document created in Firestore with ID: ", id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //tìm kiếm người dùng từ id có sẵn
  const findUserById = async (id: string): Promise<UserProps | undefined> => {
    setLoading(true);
    return await userViewModel
      .getItemById(id)
      .then((user) => {
        if (user) {
          return user;
        } else {
          console.log("Không tìm thấy người dùng");
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // cập nhật thông tin người dùng khi có id
  const updateUser = async (id: string, userUpdates: UserProps) => {
    setLoading(true);
    await userViewModel
      .updateItem(id, userUpdates)
      .then(() => {
        fetchUser(id);
        console.log("Update user success");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //@hạn chế sử dụng hàm này
  // xóa người dùng hiện tại
  const deleteCurrentUser = async (id: string) => {
    setLoading(true);
    //xóa trên fireStore
    await userViewModel
      .deleteItem(id)
      .then(() => {
        console.log("Delete user success");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    //xóa trên fireAuth
    const userAuth = auth.currentUser;
    if (userAuth) {
      try {
        deleteUser(userAuth);
        console.log("delete user on fire auth success");
      } catch (error) {
        console.log(error);
      }
    }
  };
  // đăng nhập người dùng với email và password
  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      const userLogin = userAuth.user;

      if (userLogin) {
        const userStore = await findUserById(userLogin.uid);
        fetchUser(userLogin.uid);
        alert("Đăng nhập thành công" + userLogin.uid);
        if (userStore?.isNewUser) {
          router.replace("/auth/intro");
        } else {
          router.replace("/tabs");
        }
      }
    } catch (error) {
      alert("Tài khoản hoặc mật khẩu chưa khớp, vui lòng kiểm tra lại");
      console.log(error);
      setLoading(false);
    }
  };
  // đăng ký người dùng mới
  const signUpUser = async (
    data: UserRegisterProps,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      setLoading(true);
      const id = await registerUserOnFireAuth(data.email, data.password);
      if (id) {
        await createUserOnFireStore(id, data.name, data.email);
        fetchUser(id);
        console.log(
          "User registered and Firestore document created successfully"
        );
        router.replace("/auth/intro");
      } else {
        console.log("Đăng ký không thành công vui lòng thử lại");
      }
    } catch (error) {
      throw new Error("Error creating Firestore document");
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };
  // đăng xuất
  const signOutUser = async () => {
    try {
      await logout();
      signOut(auth);
      console.log("Đăng xuất thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLoading,
    user,
    signUpUser,
    findUserById,
    updateUser,
    deleteCurrentUser,
    loginUser,
    signOutUser,
  };
}
function logOut(auth: Auth) {
  throw new Error("Function not implemented.");
}
