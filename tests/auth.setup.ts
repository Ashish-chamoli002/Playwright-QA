import { test as setup, expect } from '@playwright/test';

setup('creating customer 01', async ({ page }) => {
    const email = 'customer@practicesoftwaretesting.com';
    const password = 'welcome01';
    const customer01AuthFile = '.auth/customer01.json';

    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByTestId('nav-sign-in').click();
    await page.getByTestId('email').fill(email);
    await page.getByTestId('password').fill(password);
    await page.getByTestId('login-submit').click();
    await page.getByTestId('nav-menu').waitFor({ state: 'visible' });
    await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
    //await isContext.storageState({ path: customer01AuthFile });
    await page.context().storageState({ path: customer01AuthFile });
});
