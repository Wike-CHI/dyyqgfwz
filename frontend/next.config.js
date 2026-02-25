/** @type {import('next').NextConfig} */
const nextConfig = {
    // 如果你想部署到 GitHub Pages、Gitee Pages 或其他纯静态托管服务，请取消下面两行的注释：
    output: 'export',
    // Use system TLS certificates for Turbopack to fetch Google Fonts
    experimental: {
      turbopackUseSystemTlsCerts: true,
    },
    images: {
      // 静态导出时不支持 Next.js 的默认图片优化，需要开启此选项
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'treehousebrew.com',
        },
        {
          protocol: 'https',
          hostname: 'images.squarespace-cdn.com',
        },
      ],
    },
};

module.exports = nextConfig;
