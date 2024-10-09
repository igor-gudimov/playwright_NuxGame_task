import { type Locator, type Page } from '@playwright/test';
import { BasePage } from "./basePage";
import { ProfileDropdownSettingsComponent } from "../components/profileDropdownSettingsComponent";

export class PreferencesPage extends BasePage {
  readonly page: Page;
  readonly profileSettings: ProfileDropdownSettingsComponent;
  readonly url: string;
  readonly selectedLangField: Locator;
  readonly selectLangButton: Locator;
  readonly langList: Locator;
  readonly saveSettingsButton: Locator;
  readonly headerBanner: Locator;
  readonly leftMenuHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.profileSettings = new ProfileDropdownSettingsComponent(page);
    this.url = '/wiki/Special:Preferences';
    this.selectedLangField = page.locator('#mw-input-wplanguage #ooui-2');
    this.selectLangButton = page.locator('#mw-input-wplanguage span[class="oo-ui-dropdownWidget-handle"]');
    this.langList = page.locator('div[id="mw-teleport-target"]');
    this.saveSettingsButton = page.locator('.mw-htmlform-submit-buttons button[type="submit"]');
    this.headerBanner = page.locator('#firstHeading');
    this.leftMenuHeader = page.locator('#n-mainpage-description span');
  }

  async chooseInterfaceLang(language: string) {
    await this.selectLangButton.click()
    await this.langList.getByText(language).click()
    await this.saveSettingsButton.click()
  }
}