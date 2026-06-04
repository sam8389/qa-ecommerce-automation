import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { qaEnvironment } from '../environments/qa';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage() {
        await this.navigate(qaEnvironment.baseUrl);
    }

    async login(username: string, password: string) {
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }
}