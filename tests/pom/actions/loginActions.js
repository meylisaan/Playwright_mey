import loginLocator from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     *  @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.clickBtn = page.locator(this.loginLocator.btnLogin);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');

    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickBtn.click();
    }
}
