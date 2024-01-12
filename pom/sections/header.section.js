export class HeaderSection {
  constructor(page) {
    this.page = page;
    this.garageButton = page.getByRole("link", { name: "Garage", exact: true });
    this.myProfileButton = page.locator("#userNavDropdown");
  }
}
