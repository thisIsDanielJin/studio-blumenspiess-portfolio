import { test, expect } from "@playwright/test";

test("images scale to fill container at 1680px", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 1000 });
  await page.goto("/studio-blumenspiess");
  await page.waitForTimeout(2000);

  const result = await page.evaluate(() => {
    const panel = document.querySelector("[data-scroll-panel]") as HTMLElement;
    const draggables = document.querySelectorAll(".react-draggable");
    const positions = Array.from(draggables).map(el => {
      const style = (el as HTMLElement).style;
      const transform = style.transform;
      const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      return {
        x: match ? parseFloat(match[1]) : 0,
        width: (el as HTMLElement).offsetWidth,
        rightEdge: match ? parseFloat(match[1]) + (el as HTMLElement).offsetWidth : 0,
      };
    });
    return {
      panelWidth: panel.clientWidth,
      imageCount: draggables.length,
      positions: positions.slice(0, 6),
      maxRightEdge: Math.max(...positions.map(p => p.rightEdge)),
    };
  });

  console.log("Panel width:", result.panelWidth);
  console.log("Image count:", result.imageCount);
  console.log("Max right edge:", result.maxRightEdge);
  console.log("Coverage:", Math.round((result.maxRightEdge / result.panelWidth) * 100) + "%");
  console.log("Sample positions:", JSON.stringify(result.positions.slice(0, 4), null, 2));

  // Images should fill at least 85% of the panel width
  expect(result.maxRightEdge / result.panelWidth).toBeGreaterThan(0.85);
});

test("images scale to fill container at 1280px", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/studio-blumenspiess");
  await page.waitForTimeout(2000);

  const result = await page.evaluate(() => {
    const panel = document.querySelector("[data-scroll-panel]") as HTMLElement;
    const draggables = document.querySelectorAll(".react-draggable");
    const positions = Array.from(draggables).map(el => {
      const style = (el as HTMLElement).style;
      const transform = style.transform;
      const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      return {
        x: match ? parseFloat(match[1]) : 0,
        rightEdge: match ? parseFloat(match[1]) + (el as HTMLElement).offsetWidth : 0,
      };
    });
    return {
      panelWidth: panel.clientWidth,
      maxRightEdge: Math.max(...positions.map(p => p.rightEdge)),
    };
  });

  console.log("Panel width:", result.panelWidth);
  console.log("Max right edge:", result.maxRightEdge);
  console.log("Coverage:", Math.round((result.maxRightEdge / result.panelWidth) * 100) + "%");

  expect(result.maxRightEdge / result.panelWidth).toBeGreaterThan(0.85);
});
