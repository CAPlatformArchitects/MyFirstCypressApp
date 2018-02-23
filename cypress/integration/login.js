describe('Login Tests', function(){
    it("just login", function(){
        cy.visit('https://rally1.rallydev.com/slm/login.op')
         .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
         .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
         .get('#login-button').click()
        })
    })