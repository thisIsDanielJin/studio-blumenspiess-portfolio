import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./tests/screenshots",
  use: {
    baseURL: "http://localhost:3002",
    viewport: { width: 1440, height: 900 },
  },
});
