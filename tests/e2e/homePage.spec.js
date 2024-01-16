import { test, expect } from "@playwright/test";
import { HomePage } from "../../pom/pages/home.page.js";
import { HeaderSection } from "../../pom/sections/header.section.js";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("QA Auto home page tests", () => {
  test("creating a new unique user", async ({ page }) => {
    const homePage = new HomePage(page);
    const headerSection = new HeaderSection(page);

    await test.step("opening the web page with user credentials", async () => {
      await page.goto("");

      await expect(page).toHaveURL("https://qauto.forstudy.space/");
    });

    await test.step("opening the Log in modal window", async () => {
      await homePage.signInButton.click();
      await expect(homePage.logInModalHeader).toBeVisible();
    });

    await test.step("opening the Registration modal window", async () => {
      await homePage.registrationButton.click();
      await expect(homePage.registrationModalHeader).toBeVisible();
    });

    await test.step("filling up the registration form", async () => {
      await homePage.nameInput.fill(process.env.FIRST_NAME);

      await homePage.lastNameInput.fill(process.env.LAST_NAME);

      await homePage.emailInput.fill(
        Math.floor(Math.random() * 1000 + 1) + process.env.EMAIL
      );

      const password =
        Math.floor(Math.random() * 1000 + 1) + process.env.PASSWORD;

      await homePage.passwordInput.fill(password);
      await homePage.reEnterPasswordInput.fill(password);
    });

    await test.step("clicking the register button and verifying if the user is created", async () => {
      await homePage.registerButton.click();

      await expect(headerSection.garageButton).toBeVisible();
      await expect(headerSection.myProfileButton).toBeVisible();
    });
  });
});
