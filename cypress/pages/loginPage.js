    class LoginPage {
        visit() {
        cy.visit('/entrar');
        }
  
    fillLogin(login) {
      cy.get('#username').type(login);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submitLogin() {
      cy.get('button.btn-primary--solid')
        .contains('Entrar')
        .click();
    }      

    checkModalMessage(expectedMessage) {
        cy.get('.cdk-overlay-pane.modal-panel-overlay', { timeout: 10000 })
            .should('be.visible')
            .contains(expectedMessage);
    }
  
    checkErrorMessage(message) {
        cy.get('p.form-error-message', { timeout: 10000 })
        .contains(message);
      }

    checkFieldErrorMessage(message) {
     cy.get('span.login-form-error-message', { timeout: 10000 })
        .contains(message)
        .should('be.visible');
    }    
  }
  
  export default LoginPage;
  