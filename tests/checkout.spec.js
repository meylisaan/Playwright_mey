import { test, expect } from '@playwright/test';
test.use({ storageState: 'auth.json'});

test('checkitem', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  const inpFirstName ='Meylisa';
  const inpLastName = 'Anditya';
  const inpZip = '55365';


  //Add Cart
  const ctaAddCart1 = page.locator('#add-to-cart-sauce-labs-backpack');
  await ctaAddCart1.click();


  //Cart
  const ctaCart = page.locator('#shopping_cart_container');
  await ctaCart.click();


  //Checkout
  const ctaCheckout = page.locator('#checkout');
  await ctaCheckout.click();

  const inputFirstName = page.locator('#first-name');
  await inputFirstName.fill(inpFirstName);
  await expect(inputFirstName).toHaveValue(inpFirstName);

  const inputLastName = page.locator('#last-name');
  await inputLastName.fill(inpLastName);
  await expect(inputLastName).toHaveValue(inpLastName);

  const inputZipCode = page.locator('#postal-code');
  await inputZipCode.fill(inpZip);
  await expect(inputZipCode).toHaveValue(inpZip);

  const ctaContinue = page.locator('#continue');
  await ctaContinue.click();

  const ctaFinish = page.locator('#finish');
  await ctaFinish.click();







  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle('Swag Labs');
});