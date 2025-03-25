import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		APP_ENV: process.env.APP_ENV,
		APP_URL: process.env.APP_URL,
		APP_DOMAIN: process.env.APP_DOMAIN,
		SERVER_URL: process.env.SERVER_URL,
		IP_REGISTRY_SECRET: process.env.IP_REGISTRY_SECRET,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
	async rewrites() {
		return [{ source: '/uploads/:path*', destination: `${process.env.SERVER_URL}/uploads/:path*` }]
	},
}

export default nextConfig
