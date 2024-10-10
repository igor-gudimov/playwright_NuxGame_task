import { expect } from '@playwright/test';
import { test } from "./setup/base_setup";

test.use({ storageState: 'playwright/.auth/wiki_user.json' });

test("Verify Wikipedea's change language interface", async ({ prefPage, mainPage, page }) => {
  await mainPage.open();
  await mainPage.profileSettings.openPreferencesPage();
  await page.waitForURL(prefPage.url);
  if (await prefPage.selectedLangField.innerText() == 'en - English') {
    await prefPage.chooseInterfaceLang('uk - українська');
    await expect(prefPage.headerBanner).toContainText('Налаштування');
    await expect(prefPage.leftMenuHeader).toContainText('Головна сторінка');
    await mainPage.open();
    await expect(mainPage.talkButton).toContainText('Обговорення');
  } else {
    await prefPage.chooseInterfaceLang('en - English');
    await expect(prefPage.headerBanner).toContainText('Preferences');
    await expect(prefPage.leftMenuHeader).toContainText('Main page');
    await mainPage.open();
    await expect(mainPage.talkButton).toContainText('Talk');
  }
});
