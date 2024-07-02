// src/services/userAPI.ts
import axios from "axios";
import { BASE_URL } from "@/config";
import { getHeaders } from "@/services/auth/auth.service";
import { ErrorApiCatching } from "@/utils/errors/error.api";

export const getUsers = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: await getHeaders(),
    });

    return response.data.documents;
  } catch (error: any) {
    if (error.response) {
      // Lỗi từ phản hồi của server
      ErrorApiCatching(error.response.data);
    } else if (error.request) {
      // Lỗi từ yêu cầu
      console.error("Error with request:", error.request);
    } else {
      // Lỗi khác
      console.error("General error:", error.message);
    }
  }
};
