import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				regalWhite: "#FFFFFF",
				regalBlack: "#292929",

			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
