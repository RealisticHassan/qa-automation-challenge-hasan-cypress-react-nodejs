import { CityPage } from '../pageObjects/CityPage';

describe('City Management Functionality', () => {
  let city;
  let cityPage;

  before(() => {
    cy.fixture('city').then((data) => {
      city = data;
    });
  });

  beforeEach(() => {
    cityPage = new CityPage();
    cityPage.gotoCityPage();
  });



  it('add valid city details', () => {
    cityPage
      .inputCityCode(city.CityWithValidDetails.code)
      .inputCityName(city.CityWithValidDetails.name)
      .inputCityDescription(city.CityWithValidDetails.description)
      .clickOnSubmitButton()
      .getToast().should('contain', 'saved');


  });

  it('update city', () => {
    cityPage
      .editCityByCode(city.CityToEdit.code)
      .assertInputFieldsBoundTo(city)
      .assertSaveButtonText('Update City')
      .inputCityDescription(city.CityToEdit.updatedDescription)
      .clickOnSubmitButton()
      .getToast().should('contain', 'saved');


  });

  it('delete city', () => {
    cityPage
      .deleteCityByCode(city.CityToDelete.code)
    cityPage.getToast().should('contain', 'deleted')
    cityPage.assertCityNotInGrid(city.CityToDelete.code);
  });


  it('should not allow adding a city with an existing city code', () => {
    cityPage
      .inputCityCode(city.CityWithDuplicateCode.code)
      .inputCityName(city.CityWithDuplicateCode.name)
      .inputCityDescription(city.CityWithDuplicateCode.description)
      .clickOnSubmitButton();
   
    cityPage.getToast().should('contain', 'already exists');  

  });


});
