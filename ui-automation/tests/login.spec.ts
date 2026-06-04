import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await expect(page).toHaveURL(/inventory/);

});