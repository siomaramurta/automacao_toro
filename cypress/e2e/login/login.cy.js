import LoginPage from '../../pages/loginPage';
import '../../support/commands';

// OBS: A validação dos cenários de login com credenciais corretas foram realizados com base em um usuário que não finalizou 
// o cadastro na plataforma. Cheguei a conseguir, de fato, logar com o e-mail e senha deste usuário apenas 1 vez. Após deslogar 
// e logar novamente, não consegui mais logar e o drawer solicitando o token passou a ser exibido. Dessa forma, estes
// cenários foram realizados considerando que o fluxo esperado seria a visualização do drawer.

const loginPage = new LoginPage();

describe('Login na plataforma Toro Investimentos', () => {

  beforeEach(() => {
    cy.fixture('users').as('users');
    loginPage.visit(); 
  });

  it('Login com credenciais corretas utilizando e-mail', function () {
    cy.log('Given que o usuário acessa a página de login');
    cy.log('When o usuário insere um e-mail cadastrado no sistema e a senha correta');
    cy.log('And clica no botão "Entrar"');
    cy.log('Then o drawer deve ser exibido com a mensagem "Baixe o aplicativo da Toro para gerar o Token e acessar sua conta"');

    cy.waitForPageLoad();

    cy.login(this.users.validEmailUser.login, this.users.validEmailUser.password);

    loginPage.checkModalMessage('Baixe o aplicativo da Toro para gerar o Token e acessar sua conta');
  });

  it('Login com credenciais corretas utilizando CPF (somente números)', function () {
    cy.log('Given que o usuário acessa a página de login');
    cy.log('When o usuário insere um CPF cadastrado no sistema, apenas com os números, e a senha correta');
    cy.log('And clica no botão "Entrar"');
    cy.log('Then o drawer deve ser exibido com a mensagem "Baixe o aplicativo da Toro para gerar o Token e acessar sua conta"');

    cy.waitForPageLoad();

    cy.login(this.users.validCpfUser.login, this.users.validCpfUser.password);

    loginPage.checkModalMessage('Baixe o aplicativo da Toro para gerar o Token e acessar sua conta');
  });

  it('Login com e-mail cadastrado e senha incorreta', function () {
    cy.log('Given que o usuário acessa a página de login');
    cy.log('When o usuário insere um e-mail cadastrado no sistema e uma senha incorreta');
    cy.log('And clica no botão "Entrar"');
    cy.log('Then a mensagem "Dados incorretos. Digite novamente." deve ser exibida acima do campo de login');

    cy.waitForPageLoad();

    cy.login(this.users.invalidPasswordEmailUser.login, this.users.invalidPasswordEmailUser.password);

    loginPage.checkErrorMessage('Dados incorretos. Digite novamente.');
  });

  it('Login com CPF cadastrado e senha incorreta', function () {
    cy.log('Given que o usuário acessa a página de login');
    cy.log('When o usuário insere um CPF cadastrado no sistema e uma senha incorreta');
    cy.log('And clica no botão "Entrar"');
    cy.log('Then a mensagem "Dados incorretos. Digite novamente." deve ser exibida acima do campo de login');

    cy.waitForPageLoad();

    cy.login(this.users.invalidPasswordCPFUser.login, this.users.invalidPasswordCPFUser.password);

    loginPage.checkErrorMessage('Dados incorretos. Digite novamente.');
  });
});
