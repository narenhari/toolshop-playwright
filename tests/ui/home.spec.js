const { test, expect } = require('@playwright/test');

test('shop home page loads', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page).toHaveTitle(/Toolshop/);
});