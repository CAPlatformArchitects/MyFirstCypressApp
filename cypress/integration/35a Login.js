describe('Login', function(){
    it("Visit the page and login", function() {
        cy.visit('/slm/login.op')
        cy.url().should('include', '.rallydev.com')
            .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
            .get('#j_password').type('testme33').should("have.value", "testme33")
            .get('#login-button').click()
            .wait(10000)
        //TODO: need to obvuscate username and password
        //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
         });
});