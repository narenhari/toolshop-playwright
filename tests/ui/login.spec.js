const { test, expect } = require('@playwright/test');

test('customer can log in', async ({ page }) => {
  await page.goto('http://localhost:4200/auth/login');
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page).toHaveURL(/account/, { timeout: 15000 });
});