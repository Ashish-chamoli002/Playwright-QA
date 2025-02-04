import { test, expect } from '@playwright/test';

test.describe('Home Page without auth', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    test('Check in', async ({ page }) => { 
        await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');
    });
    test('page title', async ({ page }) => { 
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
    });
    test('product count', async ({ page }) => { 
        const productgrid = await page.locator('.col-md-9');
        await expect(productgrid.getByRole('link')).toHaveCount(9);
    });
    test('filter', async ({ page }) => { 
        const productgrid = await page.getByTestId('search_completed');
        await page.getByTestId('search-query').fill('Thor Hammer');
        await page.getByTestId('search-submit').click();
        
        await expect(productgrid.getByRole('link')).toHaveCount(1);
        await expect(page.getByAltText('Thor Hammer')).toBeVisible();
    });
});

test.describe('Home Page with auth', () => {
    test.use({storageState: '.auth/customer01.json'});
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    
    test('page title', async ({ page }) => { 
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
    });
    test('product count', async ({ page }) => { 
        const productgrid = await page.locator('.col-md-9');
        await expect(productgrid.getByRole('link')).toHaveCount(9);
    });
    test('filter', async ({ page }) => { 
        const productgrid = await page.getByTestId('search_completed');
        await page.getByTestId('search-query').fill('Thor Hammer');
        await page.getByTestId('search-submit').click();
        
        await expect(productgrid.getByRole('link')).toHaveCount(1);
        await expect(page.getByAltText('Thor Hammer')).toBeVisible();
    });
});