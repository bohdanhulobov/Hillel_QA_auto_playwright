export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profileButton = page.locator('a.btn.-profile[href="/panel/profile"]');
    this.editProfileButton = page.getByRole("button", { name: "Edit profile" });
    this.photoInput = page.locator('input[name="photo"]');
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.successPopup = page.locator(".alert-success");

    //add a car modal
    this.brandDropdown = page.getByLabel("Brand");
    this.modelDropdown = page.getByLabel("Model");
    this.mileageInput = page.getByLabel("Mileage");
    this.addButton = page.getByRole("button", { name: "Add" });
  }
}
