import { registerPage } from "../Pages/registerPage";
const registerObj = new registerPage();
import registerPageData from "../fixtures/registerPageData.json"

describe("Register Flow", () => {
  it("Test Registeration Flow", () => {
    registerObj.visitURL()
    registerObj.setFirstName(registerPageData.firstName);
    registerObj.setLastName(registerPageData.lastName);
    registerObj.setEmail(registerPageData.email);
    registerObj.setTelephone(registerPageData.telephone);
    registerObj.setPassword(registerPageData.password);
    registerObj.selectPolicy();
    registerObj.clickContinue();
  });
});
