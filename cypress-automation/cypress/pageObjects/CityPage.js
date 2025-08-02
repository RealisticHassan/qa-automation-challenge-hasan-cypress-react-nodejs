
export class CityPage {


  cityLocators = {
    cityPageUrl: '/city',
    cityCodeInput: 'input[name="CityCode"]',
    cityNameInput: 'input[name="CityName"]',
    cityDescriptionInput: 'input[name="CityDescription"]',
    saveButton: '.save-button',
    cityGridTable: '.city-grid',
    cityGridRows: '.city-grid tbody tr',
    editButtonInGrid: 'button:contains("Edit")',
    deleteButtonInGrid: 'button:contains("Delete")',
    logoutButton: 'button:contains("Logout")',
    toast: '.Toastify__toast--success'
  };


  gotoCityPage() {
    cy.visit(this.cityLocators.cityPageUrl)
    return this
  }

  inputCityCode(cityCode) {
    cy.get(this.cityLocators.cityCodeInput).click().clear().type(cityCode)
    return this
  }

  inputCityName(cityName) {

    cy.get(this.cityLocators.cityNameInput).click().clear().type(cityName)
    return this
  }

  inputCityDescription(cityDescription) {

    cy.get(this.cityLocators.cityDescriptionInput).click().clear().type(cityDescription)
    return this
  }


  editCityByCode(cityCode) {
    cy.get(this.cityLocators.cityGridRows).contains('td', cityCode)
      .parent('tr')
      .within(() => {
        cy.contains('Edit').click();
      });
    return this;
  }

  assertInputFieldsBoundTo(city) {

    cy.get(this.cityLocators.cityCodeInput).should('have.value', city.CityToEdit.code);
    cy.get(this.cityLocators.cityNameInput).should('have.value', city.CityToEdit.name);
    cy.get(this.cityLocators.cityDescriptionInput).should('have.value', city.CityToEdit.description);
    return this;
  }

  assertSaveButtonText(expectedText) {
    cy.get(this.cityLocators.saveButton).should('contain.text', expectedText);
    return this;
  }


  clickOnSubmitButton() {
    cy.get(this.cityLocators.saveButton).click()
    return this
  }



  deleteCityByCode(cityCode) {
    cy.get(this.cityLocators.cityGridRows).contains('td', cityCode)
      .parent('tr')
      .within(() => {
        cy.contains('Delete').click();
      });

    cy.on('window:confirm', () => true);
    return this;
  }

  assertCityNotInGrid(cityCode) {
  cy.get(this.cityLocators.cityGridTable).should('not.contain', cityCode);
  return this;

  }

  getLogoutButton() {
    return cy.get(this.cityLocators.logoutButton)

  }

  getToast() {
    return cy.get(this.cityLocators.toast, { timeout: 3000 });
  }




}