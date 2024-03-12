/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    STRAPI_URL: 'http://localhost:1337/graphql',
  },
  nextConfig,
};
