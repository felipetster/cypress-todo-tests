// cypress/support/pages/TodoPage.js

class TodoPage {
  
  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/')
  }

  addTodo(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
  }

  getTodos() {
    return cy.get('.todo-list li')
  }

  toggleTodo(index = 0) {
    this.getTodos().eq(index).find('.toggle').click()
  }

  deleteTodo(index = 0) {
    this.getTodos()
      .eq(index)
      .trigger('mouseover')
      .find('.destroy')
      .click({ force: true })
  }

  filterBy(filter) {
    cy.contains(filter).click()
  }
}

export default new TodoPage()