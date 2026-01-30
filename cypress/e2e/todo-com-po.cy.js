// cypress/e2e/todo-com-po.cy.js

import TodoPage from '../support/pages/TodoPage'

describe('TodoMVC - Com Page Objects', () => {
  
  beforeEach(() => {
    TodoPage.visit()
  })

  it('Deve adicionar e completar tarefa', () => {
    TodoPage.addTodo('Estudar QA')
    TodoPage.toggleTodo(0)
    
    TodoPage.getTodos()
      .first()
      .should('have.class', 'completed')
  })
})