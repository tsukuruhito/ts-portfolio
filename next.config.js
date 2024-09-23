/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/webp'],
		remotePatterns: [{ hostname: 'images.microcms-assets.io' }],
	},
	transpilePackages: ['three'],
}

module.exports = nextConfig
