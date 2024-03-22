


import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
const { chromium } = require('@playwright/test');
test('locator syntax rules', async ({ page }) => {
  const browser = await chromium.launch();
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('link', { name: 'or explore the map' }).click();
  await page.getByRole('textbox',{name :'Start typing an address'}).click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 541,
      y: 340,
    }
  });
  const actual = page.getByText('61c Bay Street, Red Beach, Silverdale 0932, New Zealand');
  const given ='61c Bay Street, Red Beach, Silverdale 0932, New Zealand';
  await expect(actual).toHaveText(given); 
 // await page.close();
  await browser.close();
});
  // await page.waitForTimeout(5000);
  // await page.close();
//   import { test, expect } from '@playwright/test';
//  test('locator syntax rules', async ({ page }) => {
// await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
// await page.getByRole('link', { name: 'or explore the map' }).click();
// await page.getByRole('textbox',{name :'Start typing an address'}).click();
// await page.getByRole('textbox',{name:'Start typing an address'}).fill('23a Cedar Grove, Matua, Tauranga 3110, New Zealand');
// await page.getByText('23 Cedar Grove, Matua, Tauranga 3110, New Zealand').click();
// const actual = page.getByText('23 Cedar Grove, Matua, Tauranga 3110, New Zealand');
// const given ='23 Cedar Grove, Matua, Tauranga 3110, New Zealand';
// await expect(actual).toHaveText(given);  
// });
// test('Reusing Locators - Sign In - Using the Grid', async ({ page }) => {
//   const gridForm = page
//     .locator('nb-card')
//     .filter({ hasText: 'Using the Grid' });
//   const emailField = gridForm.getByRole('textbox', { name: 'Email' });
//   const pwdField = gridForm.getByRole('textbox', { name: 'Password' });
//   const signInBtn = gridForm.getByRole('button');

//   await emailField.fill('ram@magicturtlehq.com');
//   await pwdField.fill('abc123');
//   await signInBtn.click();

//   await expect(emailField).toHaveValue('ram@magicturtlehq.com');
// });
