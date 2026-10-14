# Toolshop Playwright Tests

Test automation project for the open-source Practice Software Testing (Toolshop) app, run locally in Docker.

## What it covers
- SQL data validation against the MariaDB database (missing prices, duplicate emails, products without a category)
- Database connection check
- UI smoke test with Playwright
- API vs database check (product count from the API matches non-rental products in the DB)
- Login UI test and page checks across Chromium, Firefox and WebKit

## Tech
Playwright, JavaScript, MySQL (mysql2), Docker

## Run
1. Start the Toolshop app with Docker
2. `npm install`
3. `npx playwright test`