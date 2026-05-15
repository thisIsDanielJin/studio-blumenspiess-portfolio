import { test } from "@playwright/test";

test("yellow window screenshot", async ({ page }) => {
  await page.goto("/studio-blumenspiess", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "tests/screenshots/yellow-window-current.png", fullPage: false });
});

test("project page screenshot", async ({ page }) => {
  await page.goto("/projects/03", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "tests/screenshots/project-03-current.png", fullPage: false });
});
