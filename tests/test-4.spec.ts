import { test, expect, selectors } from '@playwright/test';
import { text } from 'stream/consumers';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.locator('div').filter({ hasText: /^Sign in$/ }).nth(3).click();
  await page.getByLabel('Email address or username').click();
  await page.getByLabel('Email address or username').fill('wertttttttttt');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  const message=await page.locator('div').filter({ hasText: /^Couldn't find your account\.$/ }).textContent()
  console.log("Errormessage is " + message);
  expect(message?.includes("find your account")).toBeTruthy()
  //expect(message==="Couldn't find your account").toBeTruthy()
});

