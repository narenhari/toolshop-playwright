const { test, expect } = require('@playwright/test');
const { query } = require('../utils/db');

test('database connects and has products', async () => {
  const rows = await query('SELECT COUNT(*) AS total FROM products');
  console.log('Products in DB:', rows[0].total);
  expect(rows[0].total).toBeGreaterThan(0);
});