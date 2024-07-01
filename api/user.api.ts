import axios from "axios";
import { auth } from "@/services/firebase";
const API_KEY = "AIzaSyAdKo8yr10BoFnWi0q0O6jEgRS4OETqwx4";
const PROJECT_ID = "envi-survey";
const DATABASE_NAME = "users" || "courses";

const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${DATABASE_NAME}`;

export const getAuthToken = async (): Promise<string | null> => {
  try {
    const idToken = await auth.currentUser?.getIdToken();
    if (idToken) {
      return idToken.toString();
    } else {
      console.log("No token found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
  }
};

// Hàm helper để tạo header cho request
export const getHeaders = async () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${await getAuthToken()}`, // Giả sử bạn có hàm getAuthToken() để lấy token Firebase
});

// Ví dụ: Lấy danh sách tất cả documents trong collection "users"
export const getUsers = async () => {
  console.log(`${BASE_URL}`);
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: await getHeaders(),
    });
    return response.data.documents;
  } catch (error) {
    console.error("Lỗi khi lấy users:", error);
    throw error; // Xử lý lỗi hoặc ném lên để xử lý ở tầng trên
  }
};
