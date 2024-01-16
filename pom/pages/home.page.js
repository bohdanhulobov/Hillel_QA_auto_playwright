export class HomePage {
  constructor(page) {
    this.page = page;

    // home page
    this.signInButton = page.getByRole("button", { name: "Sign In" });

    //login modal window
    this.logInModalHeader = page.getByRole("heading", {
      name: "Log in",
    });
    this.modalHeader = page.locator(".modal-title");
    this.registrationButton = page.getByRole("button", {
      name: "Registration",
    });

    //registration modal window
    this.registrationModalHeader = page.getByRole("heading", {
      name: "Registration",
    });
    this.nameInput = page.locator("#signupName");
    this.lastNameInput = page.locator("#signupLastName");
    this.emailInput = page.locator("#signupEmail");
    this.passwordInput = page.locator("#signupPassword");
    this.reEnterPasswordInput = page.locator("#signupRepeatPassword");
    this.registerButton = page.getByRole("button", { name: "Register" });
  }
}
