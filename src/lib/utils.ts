import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveAsset(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;

  // Ensure we don't have double slashes if basePath ends with /
  const cleanBasePath = basePath.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // DEFENSIVE: If it already carries the basePath, don't prefix again
  if (cleanBasePath && cleanPath.startsWith(cleanBasePath)) {
    return cleanPath;
  }

  // Encode spaces and other characters for safety, but keep slashes
  const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');

  return `${cleanBasePath}${encodedPath}`;
}
