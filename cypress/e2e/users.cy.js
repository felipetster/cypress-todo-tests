describe ('Validação de usuário - API + Mock DB', () => {

    it('Deve validar estruturas de dados do usuário', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
        //validar API
        expect(response.status).to.eql(200)
        expect(response.body).to.have.property('email')
        expect(response.body).to.have.property('username')
        
        const user = response.body


        cy.log('Validação SQL simulada')
        cy.log(`User ID: ${user.id}`)
        cy.log(`Email: ${user.email}`)
        cy.log(`Username: ${user.username}`)
        

        //validar integridade
        expect(user.email).to.include('@')
        expect(user.username).to.be.a('string')
    })
  })   
})