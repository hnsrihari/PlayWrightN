import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  const expected1='Log in/Sign Up';
  const actual1 =  page.getByText('Sign in');
 await expect(actual1).toHaveText(expected1,{timeout: 6000});
  console.log(`Expected ${expected1} but it is as ${actual1}`);
//   await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/sign-in#/?after_sign_in_url=%2F&after_sign_up_url=%2F&redirect_url=%2F');
//   await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
//   const visib = page.getByText('or explore the map').nth(1);
//   console.log(visib);
//   const result = await expect(visib).toHaveText('or explore the map');
//   await page.getByText('“By 7:30pm that night we had').click();
//    const actual = page.getByText ("By 7:30pm that night we had" )
//   const expected ="One of the 8 Homes we door knocked sent us an email almost immediately!they were open to selling and here our offer";
 
// await expect(actual).toHaveText(expected,{timeout: 6000});
//  console.log(`Expected ${expected} but it is as ${actual}`);
 
//   const fieldtext = await page.getByText('Doorknock in 3 simple steps:').textContent()
//   //expect(fieldtext?.includes (" Three ")).toBeTruthy 
//   const actualfield = "Doorknock in Three simple steps:"
// if 
// (fieldtext != actualfield)
//    {
//   //   console.log('Three is found in the text field!');
//   //  } else {
//     console.log('Three not found in the text field.');
//    }

//   const househunter= await page.getByText('House HuntersDoorknocking is completely FREE for a LIMITED TIMEAccess off-').textContent()
  
//   // Check if there is no visible text on the page
//   if (!househunter || househunter.trim().length === 0) 
//   {
//     console.log('No visible text is present on the page.');
//   } else {
//     console.log('Visible text is present on the page:\n', househunter);
//   }
   
 
//   const homeowner = await page.getByText('Home OwnersEvaluate real offers and hear directly from the marketHave offers at').textContent()
// // Check if there is no visible text on the page
// if (!homeowner || homeowner.trim().length === 0) 
// {
//   console.log('No visible text is present on the page.');
// } else {
//   console.log('Visible text is present on the page:\n', homeowner);
// }
// await page.close();

});