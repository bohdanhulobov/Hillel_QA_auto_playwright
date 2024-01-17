export class GaragePage {
  constructor(page) {
    this.page = page;
    this.addCarButton = page.getByRole("button", { name: "Add car" });
    this.carListItem = page.locator(".car-item");

    //add a car modal
    this.brandDropdown = page.getByLabel("Brand");
    this.modelDropdown = page.getByLabel("Model");
    this.mileageInput = page.getByLabel("Mileage");
    this.addButton = page.getByRole("button", { name: "Add" });
    this.addFuelExpenseButton = page.getByRole("button", {
      name: "Add fuel expense",
    });

    //add an expense modal
    this.numberOfLiters = page.getByLabel("Number of liters");
    this.totalCost = page.getByLabel("Total cost");
  }
}
