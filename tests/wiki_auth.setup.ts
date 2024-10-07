import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/wiki_user.json');

setup('Wiki authentication', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
  await page.locator('#wpName1').fill('');
  await page.locator('#wpPassword1').fill('');
  await page.locator('#wpLoginAttempt').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/Main_Page');
  await expect(page.locator('#Welcome_to_Wikipedia')).toBeVisible();
  await page.context().storageState({ path: authFile });
});