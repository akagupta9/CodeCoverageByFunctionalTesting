/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  name: "functional testing",
  displayName: "WEB AUTOMATION",
  globalSetup: "<rootDir>/tests/setup.ts",
  globalTeardown: "<rootDir>/tests/teardown.ts",
  verbose: true,
  preset: "ts-jest",
  testTimeout: 300000,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  // testRunner: "jest-jasmine2",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  reporters: ["default"],
  //setupFilesAfterEnv: ["jest-allure/dist/setup"],
  testMatch: ["<rootDir>/test/*.{js,jsx,ts}", "<rootDir>/tests/**/*.{js,jsx,ts}"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
