import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Email address or username').click();
  await page.getByLabel('Email address or username').fill('qwrtrytytu');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  const given = await page.locator('div').filter({ hasText: /^Couldn't find your account\.$/ })
  
  console.log("error message is"+ given );
  
  //await page.close();
});