/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.spec.ts"],
  verbose: true,
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true
};