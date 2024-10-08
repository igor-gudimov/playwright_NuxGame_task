import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/wiki_user.json' });

test("Verify Wikipedea's change language interface", async ({ page }) => {
  await page.goto('/wiki/Main_Page');
  await page.locator('#vector-user-links-dropdown-checkbox').click();
  await page.locator('#pt-preferences').click();
  await page.waitForURL('/wiki/Special:Preferences');
  if (await page.locator('#mw-input-wplanguage #ooui-2').innerText() == 'en - English') {
    await page.locator('#mw-input-wplanguage span[class="oo-ui-dropdownWidget-handle"]').click()
    await page.locator("//span[contains(@class, 'oo-ui-labelElement-label') and text() = 'uk - українська']").click();
    await page.locator('.mw-htmlform-submit-buttons button[type="submit"]').click();
    await expect(page.locator('#firstHeading')).toContainText('Налаштування');
    await expect(page.locator('#n-mainpage-description span')).toContainText('Головна сторінка');
  } else {
    await page.locator('#mw-input-wplanguage span[class="oo-ui-dropdownWidget-handle"]').click()
    await page.locator("//span[contains(@class, 'oo-ui-labelElement-label') and text() = 'en - English']").click();
    await page.locator('.mw-htmlform-submit-buttons button[type="submit"]').click();
    await expect(page.locator('#firstHeading')).toContainText('Preferences');
    await expect(page.locator('#n-mainpage-description span')).toContainText('Main page');
  }
});
