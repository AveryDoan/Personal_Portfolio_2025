import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** The site is served from the domain root, so assets are plain root-relative paths. */
export function resolveAsset(path: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
