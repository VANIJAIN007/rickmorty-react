import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"], // only lint JS/JSX files
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react: pluginReact },
    extends: [pluginReact.configs.flat.recommended],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // disable prop-types if not used
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
