import { test, expect } from '@playwright/test';


test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const inpUser ='standard_user';
  const inpPass ='secret_sauce';


  //Input Username
  const inputUsername = page.locator('#user-name');
  await inputUsername.fill(inpUser);
  await expect(inputUsername).toHaveValue(inpUser);

  //Input Password
  const inputPass = page.locator('#password');
  await inputPass.fill(inpPass);
  await expect(inputPass).toHaveValue(inpPass);

  //Login
  const ctaLogin = page.locator('#login-button');
  await ctaLogin.click();

  await page.context().storageState({ path: 'auth.json'});






  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle('Swag Labs');
});