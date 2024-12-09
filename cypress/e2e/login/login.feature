Feature: Login na plataforma Toro Investimentos

  # Cenário de login com credenciais corretas utilizando e-mail
  Scenario: Login com credenciais corretas utilizando e-mail
    Given que o usuário acessa a página de login
    When o usuário insere um e-mail cadastrado no sistema e a senha correta
    And clica no botão "Entrar"
    Then o drawer deve ser exibido com a mensagem "Baixe o aplicativo da Toro para gerar o Token e acessar sua conta"

  # Cenário de login com credenciais corretas utilizando CPF
  Scenario: Login com credenciais corretas utilizando CPF
    Given que o usuário acessa a página de login
    When o usuário insere um CPF cadastrado no sistema e a senha correta
    And clica no botão "Entrar"
    Then o drawer deve ser exibido com a mensagem "Baixe o aplicativo da Toro para gerar o Token e acessar sua conta"

  # Cenário de login com e-mail cadastrado e senha incorreta
  Scenario: Login com e-mail cadastrado e senha incorreta
    Given que o usuário acessa a página de login
    When o usuário insere um e-mail cadastrado no sistema e a senha incorreta
    And clica no botão "Entrar"
    Then a mensagem "Dados incorretos. Digite novamente." deve ser exibida acima do campo de login

  # Cenário de login com CPF cadastrado e senha incorreta
  Scenario: Login com CPF cadastrado e senha incorreta
    Given que o usuário acessa a página de login
    When o usuário insere um CPF cadastrado no sistema e a senha incorreta
    And clica no botão "Entrar"
    Then a mensagem "Dados incorretos. Digite novamente." deve ser exibida acima do campo de login
