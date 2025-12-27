import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
// Extract repo name from GITHUB_REPOSITORY (e.g. "user/repo")
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : "Personal_Portfolio_2025";
const basePath = isGithubActions ? `/${repoName}` : "";

console.log(`Building with basePath: "${basePath}"`);

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
