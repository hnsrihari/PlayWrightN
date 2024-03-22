import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.locator('div').filter({ hasText: /^Sign in$/ }).nth(3).click();
  await page.getByRole('link', { name: 'Use phone' }).click();
  await page.getByLabel('Phone number').fill('76759-90581');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByLabel('Enter verification code.').fill('4');
  await page.getByLabel('Digit 2').fill('8');
  await page.getByLabel('Digit 3').fill('9');
  await page.getByLabel('Digit 4').fill('8');
  await page.getByLabel('Digit 5').fill('7');
  await page.getByLabel('Digit 6').fill('3');
  //await page.getByRole('link', { name: 'Logo' }).click();
});