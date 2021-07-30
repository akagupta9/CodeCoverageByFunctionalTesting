import { write as generateReport } from "puppeteer-to-istanbul";
import { Browser } from "webdriverio";
import { SignUp } from "../../pages/SignUp";
import { Driver } from "../../utils/driver";
let currentPage: any;

describe("Sign UP Feature", () => {
  let driver: Browser<"async">;
  let signUp: SignUp;
  let puppeteer: any;
  beforeAll(async () => {
    driver = await Driver.getDriver();
    signUp = new SignUp(driver);
    puppeteer = await driver.getPuppeteer();
    [currentPage] = await puppeteer.pages();
    await signUp.open("https://www.heroku.com/");
    await currentPage.coverage.startJSCoverage();
  });

  it("Validate URL title", async () => {
    let actualTitle: string = await driver.getTitle();
    expect(actualTitle).toEqual("Cloud Application Platform | Heroku");
  });

  it("Validate Signup Page", async () => {
    await signUp.clickSignupButton();
    let isPageDisplayed = await (await signUp.Form).isDisplayed();
    await expect(isPageDisplayed).toBeTruthy;
  });

  it("Perform Signup Page Operation", async () => {
    await signUp.clickSignupButton();
    await signUp.setInputField("First name", "Akanksha");
    await signUp.setInputField("Last name", "Gupta");
    await signUp.setInputField("Email address", "akankshagupta.mitrccs@gmail.com");
    await signUp.setInputField("Company name", "Testing");
    await signUp.setDropdownValue("Role", "Professional Developer");
    await signUp.setDropdownValue("Country", "India");
    await signUp.setDropdownValue("Primary development language", "Node.js");
    await signUp.clickOnCreateFreeAccountButton();
  });

  afterAll(async () => {
    const [jsCoverage] = await Promise.all([currentPage.coverage.stopJSCoverage()]);
    generateReport([...jsCoverage], { includeHostname: true, storagePath: "./.nyc_output" });
    await driver.deleteSession();
  });
});
