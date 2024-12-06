Cypress.Commands.add('login', (login, password) => {
    cy.get('#username').type(login);
    cy.get('#password').type(password);
    cy.get('button').contains('Entrar').click();
 });
    
Cypress.Commands.add('checkErrorMessage', (message) => {
    cy.contains(message).should('be.visible');
});
    
Cypress.Commands.add('waitForPageLoad', () => {
    cy.get('body').should('be.visible');
});
    