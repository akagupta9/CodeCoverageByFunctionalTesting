import { Browser } from "webdriverio";

export class SignUp {
  private driver: Browser<"async">;
  private signUpButton = "//a[text()='Sign up']";
  private formPage = "//form[contains(@class,'signup-form')]";
  private formInputField =
    "//form[contains(@class,'signup-form')]//input[@placeholder='##PLACEHOLDER##']";
  private dropDownSelectors = "//select[@placeholder='##PLACEHOLDER##']";
  private createAccountButton = "//input[@type='submit' and @value='Create Free Account']";

  constructor(driver: Browser<"async">) {
    this.driver = driver;
  }

  async open(url: string) {
    await this.driver.url(url);
    await this.driver.maximizeWindow();
  }

  get Form() {
    return this.driver.$(this.formPage);
  }

  async setInputField(placeHolderName, valueToSet) {
    let inputFiled = await this.driver.$(
      this.formInputField.replace(/##PLACEHOLDER##/g, placeHolderName)
    );
    await inputFiled.addValue(valueToSet);
  }

  async setDropdownValue(placeHolderName, optionvalue) {
    let dropDownOptions = await this.driver.$(
      this.dropDownSelectors.replace(/##PLACEHOLDER##/g, placeHolderName)
    );
    await dropDownOptions.selectByVisibleText(optionvalue);
  }

  async clickSignupButton() {
    await (await this.driver.$(this.signUpButton)).click();
  }

  async clickOnCreateFreeAccountButton() {
    await (await this.driver.$(this.createAccountButton)).click();
  }
}
