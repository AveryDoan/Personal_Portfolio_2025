import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveAsset(path: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;

  // For GitHub Pages deployment, use the raw content URL for guaranteed reliability
  const isGithubActions = process.env.GITHUB_ACTIONS === "true";
  const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/AveryDoan/Personal_Portfolio_2025/main/public";

  // Clean the incoming path (remove potential /public prefix if it exists)
  const cleanPath = path.replace(/^\/?public\//, "/").startsWith("/") ? path.replace(/^\/?public\//, "/") : `/${path.replace(/^\/?public\//, "")}`;

  if (isGithubActions) {
    return `${GITHUB_RAW_BASE}${cleanPath}`;
  }

  // Local development fallback
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanBasePath = basePath.replace(/\/+$/, "");

  // Defensive: If it already carries the basePath, don't prefix again
  if (cleanBasePath && cleanPath.startsWith(cleanBasePath)) {
    return cleanPath;
  }

  const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
  return `${cleanBasePath}${encodedPath}`;
}
