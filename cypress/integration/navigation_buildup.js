describe('Navigation Tests', function(){
    it("Visit the page and login", function() {
        cy.visit('https://rally1.rallydev.com/')
        cy.url().should('include', '.rallydev.com')
            // removed#j_ and # Why do you need them?
            .get('username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
            .get('password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
            .get('login-button').click()
         })
}); 