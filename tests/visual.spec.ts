import { test } from "@playwright/test";

test("screenshot homepage", async ({ page }) => {
  await page.goto("/studio-blumenspiess");
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll("img");
    return Array.from(imgs).filter(img => img.complete && img.naturalWidth > 0).length >= 3;
  }, { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(500);
  await page.screenshot({ path: "tests/screenshots/homepage.png", fullPage: false });
});

test("screenshot header close-up", async ({ page }) => {
  await page.goto("/studio-blumenspiess");
  await page.waitForTimeout(1000);
  const header = page.locator("header").first();
  await header.screenshot({ path: "tests/screenshots/header.png" });
});

test("screenshot about page", async ({ page }) => {
  await page.goto("/about");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "tests/screenshots/about.png", fullPage: false });
});

test("screenshot project page", async ({ page }) => {
  await page.goto("/projects/01");
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll("img");
    return Array.from(imgs).filter(img => img.complete && img.naturalWidth > 0).length >= 3;
  }, { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(500);
  await page.screenshot({ path: "tests/screenshots/project-01.png", fullPage: false });
});
