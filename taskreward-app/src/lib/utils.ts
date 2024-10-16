// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPoints(points: number) {
  return new Intl.NumberFormat("en-US").format(points);
}

export const validateFileType = (file: File) => {
  const validTypes = ["image/jpeg", "image/png", "image/gif"];
  return validTypes.includes(file.type);
};

export const validateFileSize = (file: File, maxSizeMB = 5) => {
  const maxSize = maxSizeMB * 1024 * 1024; // Convert to bytes
  return file.size <= maxSize;
};
