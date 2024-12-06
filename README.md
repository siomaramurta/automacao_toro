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