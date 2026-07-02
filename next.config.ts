import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // next/image's optimization API needs a server, which static export
    // doesn't have. Unoptimized just means the browser gets the original
    // file as-is instead of an on-the-fly resized/compressed version.
    unoptimized: true,
  },
};

export default nextConfig;
