module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}", "tests/**/*"],
      plugins: ["test"],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        node: true,
        "jest/globals": true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
