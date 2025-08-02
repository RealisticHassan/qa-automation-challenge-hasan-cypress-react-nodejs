import { LoginPage } from '../pageObjects/LoginPage'

describe('Login Functionality', () => {
  let users;
  let loginPage;

  before(() => {
    cy.fixture('user').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage = new LoginPage(); 
    loginPage.gotoLoginPage();
  });

  it('log in with valid credentials', () => {
    loginPage
      .inputEmail(users.validUser.email)
      .inputPassword(users.validUser.password)
      .clickOnSubmitButton()
      .getLogoutButton().should('be.visible'); 

     
  });


  it('log in with invalid credentials', () => {
    loginPage
      .inputEmail(users.invalidUser.email)
      .inputPassword(users.invalidUser.password)
      .clickOnSubmitButton()
      .getErrorMessage().should('be.visible').should('contain', 'Invalid email or password.'); 

     
  });

 


});
