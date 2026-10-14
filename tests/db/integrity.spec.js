const { test, expect } = require('@playwright/test');
const { query } = require('../../utils/db');

test('every product has a name', async () => {
  const rows = await query(
    "SELECT id FROM products WHERE name IS NULL OR TRIM(name) = ''"
  );
  expect(rows).toEqual([]);
});

test('every product has a valid brand', async () => {
  const rows = await query(
    `SELECT p.id, p.name
     FROM products p
     LEFT JOIN brands b ON p.brand_id = b.id
     WHERE b.id IS NULL`
  );
  expect(rows).toEqual([]);
});

test('no product has negative stock', async () => {
  const rows = await query('SELECT id, name, stock FROM products WHERE stock < 0');
  expect(rows).toEqual([]);
});

test('invoice items have positive quantity and valid price', async () => {
  const rows = await query(
    'SELECT id FROM invoice_items WHERE quantity <= 0 OR unit_price < 0'
  );
  expect(rows).toEqual([]);
});

test('every user has a first and last name', async () => {
  const rows = await query(
    `SELECT id, email FROM users
     WHERE TRIM(first_name) = '' OR TRIM(last_name) = ''`
  );
  expect(rows).toEqual([]);
});

test('user emails have a valid format', async () => {
  const rows = await query(
    "SELECT id, email FROM users WHERE email NOT LIKE '%_@_%._%'"
  );
  expect(rows).toEqual([]);
});

test('every invoice item points to a real product', async () => {
  const rows = await query(
    `SELECT ii.id
     FROM invoice_items ii
     LEFT JOIN products p ON ii.product_id = p.id
     WHERE p.id IS NULL`
  );
  expect(rows).toEqual([]);
});

test('every invoice with a user points to a real user', async () => {
  const rows = await query(
    `SELECT i.id
     FROM invoices i
     LEFT JOIN users u ON i.user_id = u.id
     WHERE i.user_id IS NOT NULL AND u.id IS NULL`
  );
  expect(rows).toEqual([]);
});