// src/config.ts
const API_KEY = "AIzaSyAdKo8yr10BoFnWi0q0O6jEgRS4OETqwx4";
const PROJECT_ID = "envi-survey";
const DATABASE_NAME = "users" || "courses";

export const getBaseUrl = (databaseName: "users" | "courses"): string => {
  return `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${databaseName}`;
};
