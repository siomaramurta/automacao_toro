    class LoginPage {
      visit() {
        cy.visit('/entrar');
        }

      checkModalMessage(expectedMessage) {
        cy.get('.cdk-overlay-pane.modal-panel-overlay', { timeout: 10000 })
          .should('be.visible')
          .contains(expectedMessage);
      }

      checkFieldErrorMessage(message) {
      cy.get('span.login-form-error-message', { timeout: 10000 })
        .contains(message)
        .should('be.visible');
      }    
    }
  
  export default LoginPage;
  