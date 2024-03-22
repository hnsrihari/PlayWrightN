

import { TIMEOUT } from 'dns';
test('locator syntax rules', async ({ page }) => {


const { chromium } = require('playwright');

// Array of addresses to search
const addresses = [
    '22 Cames Street, Whakatāne, Whakatāne 3120, New York',
'13 Serenity Drive, Ōmokoroa, Tauranga 3172, New Zealand',
'57 Sereno Vista, Bellevue, Tauranga 3110, New Zealand'

    // Add more addresses as needed
];

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    for (let address of addresses) {
        await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/'); // Replace with the URL of the property search website

        // Find and interact with the search input field
        await page.fill('input[name="address"]', address);
        await page.click('button[type="submit"]');

        // Wait for search results to load
        await page.waitForNavigation();

        // Process search results
        // Example: Extract property details, save to a database, etc.
        console.log(`Search results for ${address}:`);
        // Add your logic to handle search results here

        // Wait for a short time before moving to the next address
        await page.waitForTimeout(2000); // Adjust as needed

        // Clear search input field for the next search
        await page.fill('input[name="address"]', '');
    }

    await browser.close();
})();