/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this if you are using a 'src' directory for your pages
  // This tells Next.js that your pages are inside the 'src' folder
  experimental: {
    appDir: true, // Only if you are using the App Router in 'src/app'
    // Alternatively, for Pages Router in 'src/pages' you might just need to ensure the structure is picked up
    // Next.js usually auto-detects 'src/pages' but explicitly defining basePath or other config might be needed sometimes.
  },
  // If you are using the 'src' directory, Next.js typically finds it.
  // The error implies it wasn't finding 'src/pages' correctly.
  // Double-check if there are any other path configurations or custom build commands overriding this.
};

export default nextConfig;
