import { test, expect } from "@playwright/test";
import { GaragePage } from "../../pom/pages/garage.page";

const carBrand = "Porsche";
const carModel = "Panamera";
const randomNumber = () => Math.floor(Math.random() * 1000 + 1);

test.describe("Garage page tests", () => {
  test("The car and a fuel expanse should be added", async ({ page }) => {
    const garagePage = new GaragePage(page);

    await test.step("opening the garage page", async () => {
      await page.goto("/");
      await expect(page).toHaveURL(/\/panel\/garage\/?$/);
    });

    await test.step("adding a car to the garage", async () => {
      await garagePage.addCarButton.click();

      await garagePage.brandDropdown.selectOption(carBrand);
      await garagePage.modelDropdown.selectOption(carModel);
      await garagePage.mileageInput.fill(randomNumber().toString());
      await garagePage.addButton.click();

      await expect(garagePage.carListItem.first()).toContainText(
        `${carBrand} ${carModel}`
      );
    });
    await test.step("adding the fuel expense", async () => {
      await garagePage.addFuelExpenseButton.first().click();

      const liters = randomNumber();
      const cost = randomNumber();

      await garagePage.numberOfLiters.fill(liters.toString());
      await garagePage.totalCost.fill(cost.toString());

      await garagePage.mileageInput.click();
      await page.keyboard.press("ArrowUp");

      await garagePage.addButton.click();

      await expect(page.locator("tbody > tr")).toContainText(
        `${liters}L${cost}.00 USD`
      );
    });
  });
});
