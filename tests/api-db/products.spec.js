const { test, expect } = require('@playwright/test');
const { query } = require('../../utils/db');

test('API product count matches database', async ({ request }) => {
  const res = await request.get('http://localhost:8091/products');
  expect(res.status()).toBe(200);
  const body = await res.json();

  const rows = await query('SELECT COUNT(*) AS total FROM products WHERE is_rental = 0');
  expect(body.total).toBe(Number(rows[0].total));
});