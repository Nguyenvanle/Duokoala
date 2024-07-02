import { transform } from "@babel/core";
// src/services/userAPI.ts
import axios from "axios";
import { BASE_URL } from "@/config";
import { getAuthToken, getHeaders } from "@/services/auth/auth.service";

import { ErrorApiCatching } from "@/utils/errors/error.api";
import UserProps from "@/models/user/model";
import { data } from "@/vms/home";

export const getUsers = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: await getHeaders(),
    });

    return response.data;
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

// Hàm để tạo người dùng mới
export const createUserWithId = async (
  id: string,
  userData: UserProps
): Promise<UserProps | null> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/?documentId=${id}`,
      {
        fields: {
          id: { stringValue: userData.id },
          email: { stringValue: userData.email },
          isNewUser: { booleanValue: userData.isNewUser },
          name: { stringValue: userData.name },
          role: { stringValue: userData.role },
          phoneNumber: { stringValue: userData.phoneNumber },
          gender: { stringValue: userData.gender },
          subscriptionType: { stringValue: userData.subscriptionType },
          currentTime: { integerValue: userData.currentTime },
          targetTime: { integerValue: userData.targetTime },
          address: { stringValue: userData.address },
          avatarUrl: { stringValue: userData.avatarUrl },
          registrationDate: {
            timestampValue: userData.registrationDate.toISOString(),
          },
          lastLoginDate: {
            timestampValue: userData.lastLoginDate.toISOString(),
          },
          coursesEnrolled: {
            arrayValue: {
              values: userData.coursesEnrolled.map((course) => ({
                stringValue: course,
              })),
            },
          },
          progress: { mapValue: { fields: userData.progress } },
          preferences: { mapValue: { fields: userData.preferences } },
          completedCourses: {
            arrayValue: {
              values: userData.completedCourses.map((course) => ({
                stringValue: course,
              })),
            },
          },
          notificationsEnabled: { booleanValue: userData.notificationsEnabled },
        },
      },
      {
        headers: await getHeaders(),
      }
    );

    console.log("User created successfully:", response.data);
    return response.data as UserProps;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Lỗi từ phản hồi của server
        console.error("Error from server response:", error.response.data);
      } else if (error.request) {
        // Lỗi từ yêu cầu
        console.error("Error with request:", error.request);
      } else {
        // Lỗi khác
        console.error("General error:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
};
export const updateUser = async (
  id: string,
  userData: UserProps
): Promise<UserProps | null> => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${id}`,
      {
        fields: {
          id: { stringValue: userData.id },
          email: { stringValue: userData.email },
          isNewUser: { booleanValue: userData.isNewUser },
          name: { stringValue: userData.name },
          role: { stringValue: userData.role },
          phoneNumber: { stringValue: userData.phoneNumber },
          gender: { stringValue: userData.gender },
          subscriptionType: { stringValue: userData.subscriptionType },
          currentTime: { integerValue: userData.currentTime },
          targetTime: { integerValue: userData.targetTime },
          address: { stringValue: userData.address },
          avatarUrl: { stringValue: userData.avatarUrl },
          registrationDate: {
            timestampValue: userData.registrationDate.toISOString(),
          },
          lastLoginDate: {
            timestampValue: userData.lastLoginDate.toISOString(),
          },
          coursesEnrolled: {
            arrayValue: {
              values: userData.coursesEnrolled.map((course) => ({
                stringValue: course,
              })),
            },
          },
          progress: { mapValue: { fields: userData.progress } },
          preferences: { mapValue: { fields: userData.preferences } },
          completedCourses: {
            arrayValue: {
              values: userData.completedCourses.map((course) => ({
                stringValue: course,
              })),
            },
          },
          notificationsEnabled: { booleanValue: userData.notificationsEnabled },
        },
      },
      {
        headers: await getHeaders(),
      }
    );

    console.log("User updated successfully:", response.data);
    return response.data as UserProps;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Lỗi từ phản hồi của server
        console.error("Error from server response:", error.response.data);
      } else if (error.request) {
        // Lỗi từ yêu cầu
        console.error("Error with request:", error.request);
      } else {
        // Lỗi khác
        console.error("General error:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
};
