// import {test} from "@playwright/test";

import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

 // await page.waitForTimeout(3000);
});

test("Second test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
 // await page.waitForTimeout(3000);
});
