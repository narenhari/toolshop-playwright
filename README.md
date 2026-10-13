# Toolshop Playwright Tests

Test automation project for the open-source Practice Software Testing (Toolshop) app, run locally in Docker.

## What it covers
- SQL data validation against the MariaDB database (missing prices, duplicate emails, products without a category)
- Database connection check
- UI smoke test with Playwright

## Tech
Playwright, JavaScript, MySQL (mysql2), Docker

## Run
1. Start the Toolshop app with Docker
2. `npm install`
3. `npx playwright test`