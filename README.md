# Automação de Testes - Toro Investimentos

Este projeto contém testes automatizados utilizando **Cypress** para validar o fluxo de login da plataforma Toro Investimentos. Foi desenvolvido como parte de um case técnico, com foco em demonstrar habilidades em automação de testes e boas práticas de desenvolvimento.

## Objetivo do Projeto

O objetivo deste projeto é validar alguns cenários do fluxo de login da plataforma Toro Investimentos, garantindo que ele funcione corretamente sob diferentes condições e fornecendo relatórios das execuções.

## Diferenciais Implementados

- Organização com Padrão Page Object: Utilizado para facilitar a manutenção e reusabilidade dos testes.
- Uso de Cenários em Gherkin: Escrita dos cenários no formato BDD para maior clareza e alinhamento com equipes de negócio.
- Geração de Relatórios Automáticos: Relatórios detalhados em HTML gerados com Mochawesome, fornecendo uma visão clara das execuções.
- Cobertura de Cenários Essenciais: Testes abrangem casos positivos e negativos do fluxo de login.
- Uso de Dados Dinâmicos: Dados de usuários armazenados em fixtures para facilitar alterações sem impacto direto nos testes.

## Tecnologias Utilizadas

- **Cypress**: Framework de teste para aplicações web.
- **Mochawesome**: Geração de relatórios em HTML e JSON para análise das execuções.
- **JavaScript**: Linguagem de programação principal.
- **Gherkin**: Formato de escrita de cenários para BDD.

## Estrutura do Projeto

A estrutura do projeto segue o padrão do Cypress:

automacao_toro/
├── cypress/
│   ├── e2e/                      # Testes de ponta a ponta
│   │   └── login/                # Testes relacionados ao fluxo de login
│   │       ├── login.cy.js       # Arquivo com os testes automatizados de login
│   │       └── login.feature     # Cenários de login escritos em Gherkin
│   ├── fixtures/                 # Arquivos de dados estáticos usados nos testes
│   │   └── users.json            # Dados de exemplo para simulação de usuários
│   ├── pages/                    # Arquivos que implementam o padrão Page Object
│   │   └── loginPage.js          # Representação da página de login e suas interações
│   ├── plugins/                  # Arquivos para configuração de plugins do Cypress
│   │   └── index.js              # Arquivo principal para registro de plugins
│   ├── reports/                  # Relatórios gerados pelos testes
│   │   └── html/                 # Relatórios no formato HTML
│   │   └── mochawesome/          # Relatórios gerados pelo Mochawesome (se usado)
│   ├── screenshots/              # Capturas de tela tiradas durante falhas nos testes
│   ├── support/                  # Arquivos de suporte compartilhados pelos testes
│   │   ├── commands.js           # Comandos customizados para simplificar a escrita de testes
│   │   └── e2e.js                # Configurações adicionais e inicialização global
│   ├── videos/                   # Vídeos gravados durante a execução dos testes
├── node_modules/                 # Dependências instaladas via npm
├── cypress.config.js             # Configurações globais do Cypress
├── package-lock.json             # Controle de versão das dependências instaladas
├── package.json                  # Lista de dependências e scripts disponíveis
├── README.md                     # Documentação do projeto


## Como Executar

Requisitos
Antes de iniciar, certifique-se de que você possui as seguintes ferramentas instaladas:

- Node.js (versão 20.18.0)
- npm (gerenciador de pacotes do Node.js - versão 10.8.2)

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd automacao_toro

2. Instale as dependências:

    ```bash
    npm install

3. Execute os testes:

- Modo interativo

    ```bash
    npx cypress open

- Modo headless

    ```bash
    npx cypress run

4. Visualize os relatório

Os relatórios gerados podem ser encontrados em:

- cypress/reports/mochawesome/index.html

Os relatórios serão salvos na pasta cypress/reports/mochawesome/ e estarão disponíveis no formato HTML. O arquivo principal terá o nome index.html e, para execuções adicionais, serão gerados arquivos numerados, como index_001.html, index_002.html, e assim por diante.

Para visualizar o relatório, basta abrir o arquivo index.html (ou uma de suas variações) diretamente no navegador de sua preferência.