/** @type {import('prettier').Config} */
import path from "path";

module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  pluginSearchDirs: `${path.dirname + "**"}`,
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
  useTabs: true,
  overrides: [
    {
      files: "**/*.astro",
      options: { parser: "astro" },
    },
  ],
};
