# Cypress Portfolio - API Testing + SQL Validation

[![Testes](https://github.com/felipetster/cypress-portfolio/actions/workflows/tests.yml/badge.svg)](https://github.com/felipetster/cypress-todo-tests)

## Objetivo
Demonstrar habilidades de QA com foco em validação de dados, 
integrando testes de API com conhecimento de SQL.

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
[Felipe Castro] - QA 
[/felipetster] | [felipe.c.lima1604@gmail.com]
