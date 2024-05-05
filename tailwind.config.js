/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IRANSans'],
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},

	// tailwind.config.js
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
			strategy: 'class', // only generate classes
		}),
	],
};
