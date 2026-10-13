const { test, expect } = require('@playwright/test');
const { query } = require('../../utils/db');

test('no product has a missing or invalid price', async () => {
  const rows = await query(
    'SELECT id, name FROM products WHERE price IS NULL OR price <= 0'
  );
  expect(rows).toEqual([]);
});

test('no duplicate user emails', async () => {
  const rows = await query(
    'SELECT email, COUNT(*) AS c FROM users GROUP BY email HAVING c > 1'
  );
  expect(rows).toEqual([]);
});

test('every product belongs to a valid category', async () => {
  const rows = await query(
    `SELECT p.id, p.name
     FROM products p
     LEFT JOIN categories c ON p.category_id = c.id
     WHERE c.id IS NULL`
  );
  expect(rows).toEqual([]);
});