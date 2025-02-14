/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
    dangerouslyAllowSVG: true, // Allow SVG images
    contentSecurityPolicy: "default-src 'self'; img-src *; media-src 'none'; script-src 'none'; sandbox;", // Secure CSP
  },
};

module.exports = nextConfig;
