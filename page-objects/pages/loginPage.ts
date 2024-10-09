import { type Locator, type Page } from '@playwright/test';
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly url: string;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = '/w/index.php?title=Special:UserLogin';
    this.usernameField = page.locator('#wpName1');
    this.passwordField = page.locator('#wpPassword1');
    this.loginButton = page.locator('#wpLoginAttempt');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
