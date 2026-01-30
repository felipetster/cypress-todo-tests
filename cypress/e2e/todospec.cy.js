describe('Todo MVC - Testes básicos', () => {
  
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })
  
  //adicionar tarefa
  it('Deve adicionar uma nova tarefa', () => {
    cy.get('.new-todo')
    .type('Aprender Cypress{enter}')
  
    //verificar tarefa
    cy.get('.todo-list li')
    .should('have.length', 1)
    .first()
    .should('contain', 'Aprender Cypress')

  })
  
  it('Deve marcar tarefa como completa', () => {
    //adicionar nova tarefa    
    cy.get('.new-todo').type('Tarefa de teste{enter}')
    
    //marcar como completa
    cy.get('.toggle').click()

    cy.get('.todo-list li')
    .should('have.class', 'completed')

  })

  it('Deve deletar uma tarefa', () => {
    cy.get('.new-todo').type('Tarefa para deletar{enter}')

    //hover -> clicar no botão deletar
    cy.get('.todo-list li')
    .trigger('mouserover')
    .find('.destroy')
    .click({force:true})
    
    //validar que foi deletado
    cy.get('todo-list li').should('not.exist')
  })

  it('Deve filtrar tarefas ativas', () => {
    //adicionar 2 tarefas
    cy.get('.new-todo').type('Tarefa 1{enter}')
    cy.get('.new-todo').type('Tarefa 2{enter}')
  
  cy.get('.todo-list li').first().find('.toggle').click()

  cy.contains('Active').click()

  cy.get('.todo-list li')
  .should('have.length', 1)
  .should('contain', 'Tarefa 2')
  })

})



