export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profileButton = page.locator('a.btn.-profile[href="/panel/profile"]');
    this.editProfileButton = page.getByRole("button", {
      name: "Edit profile",
    });
    this.photoInput = page.locator('input[name="photo"]');
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.successPopup = page.locator(".alert-success");
  }
}
