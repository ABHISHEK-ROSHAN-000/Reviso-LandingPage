import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", ".next", "node_modules"],
  },
  {
    extends: [tseslint.configs.recommended],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {},
    rules: {},
    languageOptions: {
      globals: globals.browser,
    },
  },
);
