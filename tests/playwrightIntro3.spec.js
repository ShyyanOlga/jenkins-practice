// All syntax
// const{test} = require("@playwright/test");

// New prefer syntax:

import { test } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto("https://playwright.dev/");

 // await page.waitForTimeout(3000);
});
