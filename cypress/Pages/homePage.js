export class homePage{

    weblocators = {
        search: "input[class='form-control input-lgll']",
        searchIcon: ".input-group-btn",
        success: "div.alert",

    }

    searchProduct(PName){
        cy.get(this.weblocators.search).type(PName)
    }

    clickSearchIcon(){
        cy.get(this.weblocators.searchIcon).click()
    }

    clickAddToCart(){
        cy.contains("Add to Cart").click()
    }

    verifySuccessMsg(){
        return cy.get(this.weblocators.success)
    }
}