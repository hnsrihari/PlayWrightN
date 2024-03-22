import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-dev-doorknock-old.vercel.app/');
  await page.getByRole('textbox', { name: 'Start typing an address' }).click();
  await page.getByRole('textbox', { name: 'Start typing an address' }).fill('22a ce');
  await page.getByText('22a Centennial Crescent, Te H').click();
  await page.getByText('22 Centennial Crescent, Te Hā').click();
});