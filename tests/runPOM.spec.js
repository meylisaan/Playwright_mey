import { test } from '@playwright/test';
const { default: loginActions} = require('../tests/pom/actions/loginActions');


test('POM Login', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();
  
});