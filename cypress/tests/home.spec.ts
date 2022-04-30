import { getModuleListItems } from '../support/utils';

describe('Home', () => {
  beforeEach(() => {
    cy.navigateToHomePage();
  });

  it('should be able to view a list of modules', () => {
    getModuleListItems().should('have.length', 5);
  });

  it('the list of modules should contain the titles of the modules', () => {
    getModuleListItems()
      .first()
      .should('contain.text', 'Module One');
  });
});
