// src/lib/api.ts
import { AppData, ProfileData, UserSignupData } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add request interceptor for auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const login = async (email: string, password: string) => {
  const { data } = await api.post("/auth/login", { email, password });
  return data;
};

export const signup = async (userData: UserSignupData) => {
  const { data } = await api.post("/auth/signup", userData);
  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

// Apps endpoints
export const getApps = async () => {
  const { data } = await api.get("/apps");
  return data;
};

export const createApp = async (appData: AppData) => {
  const { data } = await api.post("/apps", appData);
  return data;
};

// Tasks endpoints
export const getTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};

export const updateTask = async (taskId: number, screenshot: File) => {
  const formData = new FormData();
  formData.append("screenshot", screenshot);
  const { data } = await api.patch(`/tasks/${taskId}`, formData);
  return data;
};

// Profile endpoints
export const getProfile = async () => {
  const { data } = await api.get("/profile");
  return data;
};

export const updateProfile = async (profileData: ProfileData) => {
  const { data } = await api.patch("/profile", profileData);
  return data;
};
