/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Hobedere Registry',
    description: 'The original Hobedere Registry for Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.hobedere.com/',
    contactUrl: 'https://hobedere.com/support',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
