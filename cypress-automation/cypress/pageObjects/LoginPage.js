 

 export class LoginPage {
    locators = {
        loginPageUrl: 'http://localhost:3000',
        emailField: '#email',
        passwordField: '#password',
        submitButton: 'button[type="submit"]',
        logoutButton: 'button:contains("Logout")',
        errorMessageLabel: '.error-message'
    }

    gotoLoginPage() {
        cy.visit(this.locators.loginPageUrl)
        return this
    }

    inputEmail(emailFieldText) {
        cy.log(emailFieldText + 'email param');
        
        cy.get(this.locators.emailField).click().type(emailFieldText)
        return this
    }  

    inputPassword(passwordText) {
        
        cy.get(this.locators.passwordField).click().type(passwordText)
        return this
    }

    clickOnSubmitButton() {
        cy.get(this.locators.submitButton).click()
        return this
    }

    getLogoutButton (){
       return cy.get(this.locators.logoutButton)
        
    }
    getErrorMessage (){
       return cy.get(this.locators.errorMessageLabel)
        
    }

}

 



