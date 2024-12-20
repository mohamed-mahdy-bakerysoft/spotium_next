import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
