module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  overrides: [
    {
      env: {
        node: true,
        "jest/globals": true,
      },
      files: [".eslintrc.{js,cjs}", "tests/**/*"],
      plugins: ["tests"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
