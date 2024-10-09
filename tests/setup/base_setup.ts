import { test as base } from "@playwright/test";
import { LoginPage } from "../../page-objects/pages/loginPage";
import { MainPage } from "../../page-objects/pages/mainPage";
import { PreferencesPage } from "../../page-objects/pages/preferencesPage";

type Pages = {
  loginPage: LoginPage;
  mainPage: MainPage;
  prefPage: PreferencesPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  prefPage: async ({ page }, use) => {
    await use(new PreferencesPage(page));
  }
});