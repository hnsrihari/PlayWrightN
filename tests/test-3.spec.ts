import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('textbox', { name: 'Start typing an address' }).click();
  await page.getByRole('textbox', { name: 'Start typing an address' }).fill('22a Crescent Road, Otūmoetai');
  await page.getByText('22a Crescent Road, Otūmoetai').click();
  
  const actual = page.getByText('22 Crescent Road, Otūmoetai');
  const given ='22 Crescent Road, Otūmoetai';
  await expect(actual).toHaveText(given);  
  
   await page.close();

});