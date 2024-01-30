import { type Locator, type Page } from "@playwright/test";

export class ProfilePage {
  readonly profileButton: Locator;
  readonly editProfileButton: Locator;
  readonly photoInput: Locator;
  readonly saveButton: Locator;
  readonly successPopup: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.profileButton = page.locator('a.btn.-profile[href="/panel/profile"]');
    this.editProfileButton = page.getByRole("button", {
      name: "Edit profile",
    });
    this.photoInput = page.locator('input[name="photo"]');
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.successPopup = page.locator(".alert-success");
  }

  async openGaragePage(): Promise<void> {
    await this.page.goto("/");
  }

  async setPhotoInputFile(path: string | string[]): Promise<void> {
    await this.page.setInputFiles('input[name="photo"]', path);
  }
}
