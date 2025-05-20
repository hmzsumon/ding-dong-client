/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.pexels.com'],
		unoptimized: false,
	},
	sassOptions: {
		additionalData: `$var: red;`,
	},
};

export default nextConfig;
