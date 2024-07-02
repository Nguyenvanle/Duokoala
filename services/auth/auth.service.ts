// src/services/authService.ts
import { auth } from "@/services/firebase";

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
    console.error("Error getting auth token:", error);
    return null;
  }
};

export const getHeaders = async () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${await getAuthToken()}`,
});
