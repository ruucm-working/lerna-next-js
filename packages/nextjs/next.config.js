/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require("next-transpile-modules")(["shared", "framer-package"]);

module.exports = withTM(nextConfig)
