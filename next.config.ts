import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: isDev ? undefined : 'export',
  basePath: isDev ? undefined : "",
  assetPrefix: isDev ? undefined : "/Reviso-landingPage",
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: '/privacy',
        destination: '/privacy.html',
      },
      {
        source: '/terms',
        destination: '/terms.html',
      },
      {
        source: '/delete-account',
        destination: '/delete-account.html',
      },
    ];
  },
};

export default nextConfig;
