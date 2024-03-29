/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	arrowParens: "always",
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true
};
