/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['preview.keenthemes.com'],
	},
};

module.exports = nextConfig;
