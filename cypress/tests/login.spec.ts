import {
  getKeyInput,
  getLoginButton,
  getModuleListItems
} from '../support/utils';

describe('Login', () => {
  beforeEach(() => {
    cy.navigateToLoginPage();
  });

  it('a user should be able to reach the home page by providing a valid license key', () => {
    getKeyInput().type('abcd-egfh-ijkl-mnop');
    getLoginButton().click();

    getModuleListItems()
      .first()
      .should('contain.text', 'Module One');
  });
});
