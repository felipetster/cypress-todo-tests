# Cypress Portfolio - API Testing + SQL Validation

[![Testes](https://github.com/felipetster/cypress-todo-tests/actions/workflows/tests.yml/badge.svg)](https://github.com/felipetster/cypress-todo-tests/actions)

## Objetivo
Demonstrar habilidades de QA com foco técnico em validação de dados, integrando testes automatizados de API (Cypress) com verificações de integridade em banco de dados (SQL).
## Stack
- Cypress 13
- JavaScript ES6
- SQL (PostgreSQL)
- GitHub Actions

## Estrutura
```
cypress-portfolio/
├── cypress/e2e/          # Testes automatizados
├── db/queries.sql        # Queries SQL documentadas
└── README.md
```

## Cenários Testados

Validação de estrutura de dados de usuários (API)  
Verificação de integridade de email (SQL)  
Testes de relacionamento users-posts (JOIN)  
Validação de unicidade de dados

## Como Executar
```bash
npm install
npx cypress open
```

## Cobertura
- 15 test cases
- 100% passing
- CI/CD configurado

## Autor
**Felipe Castro** - QA Analyst  
[LinkedIn](https://www.linkedin.com/in/felipetster/) | [GitHub](https://github.com/felipetster) | [Email](mailto:felipe.c.lima1604@gmail.com)
