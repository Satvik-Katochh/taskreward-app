// src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  points: number;
  isAdmin: boolean;
}

export interface App {
  id: number;
  name: string;
  packageName: string;
  points: number;
  category: string;
  subCategory?: string;
}

export interface Task {
  id: number;
  app: App;
  completed: boolean;
  screenshot?: string;
  completedAt?: string;
}

export interface UserSignupData {
  name: string;
  email: string;
  password: string;
}

export interface AppData {
  name: string;
  packageName: string;
  points: number;
  category: string;
  subCategory?: string;
}

export interface ProfileData {
  name: string;
  email: string;
}
