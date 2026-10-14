const { test, expect } = require('@playwright/test');

test('home page shows main navigation links', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});

test('login page shows the login form', async ({ page }) => {
  await page.goto('http://localhost:4200/auth/login');
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register your account' })).toBeVisible();
});