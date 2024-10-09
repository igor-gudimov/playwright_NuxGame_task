import { expect } from '@playwright/test';
import { test as setup } from "./base_setup";
import path from 'path';

const authFile = path.join(__dirname, '../../playwright/.auth/wiki_user.json');

setup('Wiki authentication', async ({ loginPage, mainPage, page }) => {
  await loginPage.open();
  await loginPage.login(`${process.env.WIKI_USERNAME}`, `${process.env.WIKI_PASSWORD}`);
  await page.waitForURL(mainPage.url);
  await expect(mainPage.welcomeBanner).toBeVisible();
  await page.context().storageState({ path: authFile });
  await page.close();
});