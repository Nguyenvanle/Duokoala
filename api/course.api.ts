// src/services/userAPI.ts
import { getBaseUrl } from "@/config";
import { CourseProps, transformCourseToFields } from "@/models/course/model";
import { getHeaders } from "@/services/auth/auth.service";
import { ErrorApiCatching } from "@/utils/errors/error.api";
import axios, { AxiosError, AxiosInstance, AxiosHeaders } from "axios";

class CourseAPI {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: getBaseUrl("courses"),
    });

    // Sử dụng interceptor để thêm headers vào mỗi request
    this.axiosInstance.interceptors.request.use(async (config) => {
      // Tạo AxiosHeaders từ object literal
      config.headers = new AxiosHeaders(await getHeaders());
      return config;
    });
  }

  // Lấy tất cả khóa học
  async getAllCourses(): Promise<CourseProps[]> {
    try {
      const res = await this.axiosInstance.get<CourseProps[]>("/");
      return res.data;
    } catch (error: any) {
      this.handlerError(error);
      // Ném lỗi sau khi xử lý để component có thể xử lý tiếp nếu cần
      throw error;
    }
  }

  // Lấy khóa học với một id đầu vào
  async getCourseById(id: string): Promise<CourseProps> {
    try {
      const res = await this.axiosInstance.get<CourseProps>(`/${id}`);
      return res.data;
    } catch (error: any) {
      this.handlerError(error);
      throw error;
    }
  }

  // Tạo một khóa học mới
  async createCourse(payload: CourseProps): Promise<CourseProps> {
    try {
      // Tạo khóa học trên server
      const res = await this.axiosInstance.post<CourseProps>("/", {
        fields: transformCourseToFields(payload),
      });

      return res.data;
    } catch (error: any) {
      this.handlerError(error);
      throw error;
    }
  }

  // Cập nhật khóa học
  async updateCourse(id: string, payload: CourseProps): Promise<CourseProps> {
    try {
      const res = await this.axiosInstance.patch<CourseProps>(`/${id}`, {
        fields: transformCourseToFields(payload),
      });
      return res.data;
    } catch (error: any) {
      this.handlerError(error);
      throw error;
    }
  }

  // Hàm xử lý lỗi kết hợp với Axios và Firestore Rest Api
  private handlerError(error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Gọi hàm ErrorApiCatching để xử lý và in lỗi
        ErrorApiCatching(axiosError.response.data);
      } else if (axiosError.request) {
        console.error("Error with request:", axiosError.request);
      } else {
        console.error("Error setting up request:", axiosError.message);
      }
    } else {
      console.error("General error:", error);
    }
  }
}

export default new CourseAPI();
