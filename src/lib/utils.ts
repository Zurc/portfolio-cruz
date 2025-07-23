import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(path: string) {
  const basePath =
    process.env.NODE_ENV === "production" ? "/portfolio-cruz" : "";
  return `${basePath}${path}`;
}
