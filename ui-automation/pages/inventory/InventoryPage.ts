import { BasePage } from '../BasePage';
import { Page } from '@playwright/test';

export class InventoryPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async addBackpackToCart() {
        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();
    }

    async openCart() {
        await this.page
            .locator('[data-test="shopping-cart-link"]')
            .click();
    }
}