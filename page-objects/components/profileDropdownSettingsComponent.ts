import { type Locator, type Page } from '@playwright/test';

export class ProfileDropdownSettingsComponent {
  readonly page: Page;
  readonly profileIcon: Locator;
  readonly profilePreferences: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileIcon = page.locator('#vector-user-links-dropdown-checkbox');
    this.profilePreferences = page.locator('#pt-preferences');
  }

  async openPreferencesPage() {
    await this.profileIcon.click();
    await this.profilePreferences.click();
  }
}