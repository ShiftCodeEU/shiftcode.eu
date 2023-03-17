/** @type {import("eslint").Linter.Config} */
const config = {
	overrides: [
		{
			extends: [
				"plugin:@typescript-eslint/recommended-requiring-type-checking"
			],
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: "tsconfig.json"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json"
	},
	plugins: ["@typescript-eslint"],
	extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
	rules: {
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports"
			}
		]
	},
	ignorePatterns: ["tailwind.config.js", "next.config.mjs"]
};

module.exports = config;
