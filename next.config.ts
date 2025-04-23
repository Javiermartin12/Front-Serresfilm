import path from "path";
import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
