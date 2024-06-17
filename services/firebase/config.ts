import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKRMsZCjhLy2g-EwyPCOT3r1gQHD5AxdI",
  authDomain: "duokoala-1.firebaseapp.com",
  projectId: "duokoala-1",
  storageBucket: "duokoala-1.appspot.com",
  messagingSenderId: "19854476990",
  appId: "1:19854476990:web:70ffe9cd57d4019d61c0ef",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

