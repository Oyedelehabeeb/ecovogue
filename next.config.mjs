/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/categories-image/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/featured-image/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/trending-image/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/specials-image/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/discount-images/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/babies-images/**",
      },
      {
        protocol: "https",
        hostname: "dkqwukhwisxtxjhzvxiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/winter-images/**",
      },
    ],
  },
};

export default nextConfig;
