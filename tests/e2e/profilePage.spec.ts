import { test, expect } from "@playwright/test";
import { ProfilePage } from "../../pom/pages/profile.page";

test.describe("Profile page test", () => {
  test("The profile image should be uploaded and updated", async ({ page }) => {
    const profilePage = new ProfilePage(page);

    await test.step("opening the garage page", async () => {
      await profilePage.openGaragePage();
      await expect(page).toHaveURL(/\/panel\/garage\/?$/);
    });

    await test.step("opening Edit profile modal window", async () => {
      await profilePage.profileButton.click();
      await profilePage.editProfileButton.click();

      await expect(profilePage.photoInput).toBeVisible();
    });

    await test.step("uploading the image", async () => {
      await profilePage.setPhotoInputFile("media/gar1.png");
      await profilePage.saveButton.click();

      await expect(profilePage.successPopup).toBeVisible();
    });
  });
});
