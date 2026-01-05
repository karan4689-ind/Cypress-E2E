import { homePage } from "../Pages/homePage"
const homePageobj = new homePage()
import testData from "../fixtures/testData.json"

describe("Add To Cart flow", ()=>{
    before(()=>{
        cy.login(testData.Login.username,testData.Login.password)
    })
    it("Verify Add To Cart Flow", ()=>{
        homePageobj.searchProduct(testData.Product.ProductName)
        homePageobj.clickSearchIcon()
        homePageobj.clickAddToCart()
        homePageobj.verifySuccessMsg().should("contain",testData.Messages.SuccessMsg).and("contain",testData.Product.ProductName)
    })
})