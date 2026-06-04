import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import { CustomWorld } from './world';
import { InventoryPage } from '../pages/inventory/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('user is on login page', async function (this: CustomWorld) {

    loginPage = new LoginPage(this.page);

    await loginPage.navigateToLoginPage();

});

When('user enters valid username and password', async function (this: CustomWorld) {

    await loginPage.login(
        loginData.username,
        loginData.password
    );

});

Then('user should be redirected to inventory page', async function (this: CustomWorld) {

    await expect(this.page).toHaveURL(/inventory/);

});
When('user adds backpack to cart', async function (this: CustomWorld) {

    inventoryPage = new InventoryPage(this.page);

    await inventoryPage.addBackpackToCart();

});

When('user opens cart', async function (this: CustomWorld) {

    await inventoryPage.openCart();

});

Then('backpack should be visible in cart', async function (this: CustomWorld) {

    await expect(
        this.page.locator('[data-test="inventory-item-name"]')
    ).toHaveText('Sauce Labs Backpack');

});