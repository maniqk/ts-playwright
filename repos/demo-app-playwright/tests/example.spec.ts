import { test, expect } from '@playwright/test';
import exp from 'constants';

test.only.beforeEach(async({page}) => {
  await page.goto('http://localhost:5173');
});

test('Heading should be visible', async({page}) => {
  const heading=page.locator('h1',{hasText: 'Vite + TypeScript'});
  await expect(heading).toBeVisible();
});

test.describe('Counter', () => {
  test('should be visible', async({page}) => {
    const counterButton = page.locator('#counter');
    await expect(counterButton).toBeVisible();
  });

  test('should increment', async ({page}) => {
    const counterButton = page.locator('#counter');
    await expect(counterButton).toHaveText('count is 0');
    await counterButton.click();
    await expect(counterButton).toHaveText('count is 1');
  });
});
