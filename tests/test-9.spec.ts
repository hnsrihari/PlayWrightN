import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('link', { name: 'or explore the map' }).click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 541,
      y: 340
    }
  });
  await page.getByText('61c Bay Street, Red Beach,').click();
});