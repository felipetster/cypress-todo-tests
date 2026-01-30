describe('TodoMVC - Testes Básicos', () => {
  
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it('Deve adicionar uma nova tarefa', () => {
    cy.get('.new-todo')
      .type('Aprender Cypress{enter}')
    
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('contain', 'Aprender Cypress')
  })

  it('Deve marcar tarefa como completa', () => {
    // Adicionar tarefa
    cy.get('.new-todo').type('Tarefa de teste{enter}')
    
    // Marcar como completa
    cy.get('.toggle').click()
    
    // Validar que está completa
    cy.get('.todo-list li')
      .should('have.class', 'completed')
  })

  it('Deve deletar uma tarefa', () => {
    // Adicionar tarefa
    cy.get('.new-todo').type('Tarefa para deletar{enter}')
    
    // Hover e clicar no botão deletar
    cy.get('.todo-list li')
      .trigger('mouseover')
      .find('.destroy')
      .click({ force: true })
    
    // Validar que foi deletada
    cy.get('.todo-list li').should('not.exist')
  })

  it('Deve filtrar tarefas ativas', () => {
    // Adicionar 2 tarefas
    cy.get('.new-todo').type('Tarefa 1{enter}')
    cy.get('.new-todo').type('Tarefa 2{enter}')
    
    // Marcar primeira como completa
    cy.get('.todo-list li').first().find('.toggle').click()
    
    // Clicar em filtro "Active"
    cy.contains('Active').click()
    
    // Validar que só mostra 1 tarefa
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('contain', 'Tarefa 2')
  })
})