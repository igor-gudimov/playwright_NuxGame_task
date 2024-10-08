import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/wiki_user.json');

setup('Wiki authentication', async ({ page }) => {
  await page.goto('/w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
  await page.locator('#wpName1').fill(""+process.env.WIKI_USERNAME);
  await page.locator('#wpPassword1').fill(""+process.env.WIKI_PASSWORD);
  await page.locator('#wpLoginAttempt').click();
  await page.waitForURL('/wiki/Main_Page');
  await expect(page.locator('#Welcome_to_Wikipedia')).toBeVisible();
  await page.context().storageState({ path: authFile });
  await page.close();
});