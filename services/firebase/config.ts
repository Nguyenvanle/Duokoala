import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  // @ts-ignore
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCKRMsZCjhLy2g-EwyPCOT3r1gQHD5AxdI",
//   authDomain: "duokoala-1.firebaseapp.com",
//   projectId: "duokoala-1",
//   storageBucket: "duokoala-1.appspot.com",
//   messagingSenderId: "19854476990",
//   appId: "1:19854476990:web:70ffe9cd57d4019d61c0ef",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAdKo8yr10BoFnWi0q0O6jEgRS4OETqwx4",
  authDomain: "envi-survey.firebaseapp.com",
  projectId: "envi-survey",
  storageBucket: "envi-survey.appspot.com",
  messagingSenderId: "799342916011",
  appId: "1:799342916011:web:5e5bc652e76e242b1b62ee"
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

