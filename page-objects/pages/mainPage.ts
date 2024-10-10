import { type Locator, type Page } from '@playwright/test';
import { BasePage } from "./basePage";
import { ProfileDropdownSettingsComponent } from "../components/profileDropdownSettingsComponent";

export class MainPage extends BasePage {
  readonly page: Page;
  readonly profileSettings: ProfileDropdownSettingsComponent;
  readonly url: string;
  readonly welcomeBanner: Locator;
  readonly talkButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.profileSettings = new ProfileDropdownSettingsComponent(page);
    this.url = '/wiki/Main_Page';
    this.welcomeBanner = page.locator('#Welcome_to_Wikipedia');
    this.talkButton = page.locator('#ca-talk > a > span');
  }
}