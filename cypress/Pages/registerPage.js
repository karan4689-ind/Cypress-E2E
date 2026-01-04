export class registerPage{

    weblocators = {

        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        policyCheckbox: "input[type='checkbox']",
        continue: "input[class='btn btn-primary']"
    }

    visitURL(){
        cy.visit(Cypress.env('URL'))
    }

    setFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    setLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }

    setEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    setTelephone(telephone){
        cy.get(this.weblocators.telephone).type(telephone)
    }

    setPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmPassword).type(password)
    }

    selectPolicy(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickContinue(){
        cy.get(this.weblocators.continue).click()
    }
}