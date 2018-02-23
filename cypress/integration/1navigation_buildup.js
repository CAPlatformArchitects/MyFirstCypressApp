describe('Navigation Tests', function(){
    it("Visit the page and login", function() {
        cy.visit('/slm/login.op')
        cy.url().should('include', '.rallydev.com')
        // #j_ and # Why do you need them?
            .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
            .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
            .get('#login-button').click()
         })
});