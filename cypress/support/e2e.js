import './commands.js'

before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
