describe('Navigation Tests', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
         .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
         .get('#login-button').click()
    })

    it('navigates to Iteration Status page', function(){
        cy.visit('/#/196025249156d/iterationstatus')
          .url().should('include','/iterationstatus')
    })

    it('should click "Add New"', function(){
        cy.get('.chr-NavigationProjectSelectionContainer-textDescription', {timeout: 10000}).then(() => {
            cy.get("h1:contains('Iteration Status')").then(()=> {
                cy.get("span.x4-btn-inner-center:contains('+ Add New')").first().then((buttonText)=> {
                    if(!Cypress.dom.isHidden(buttonText)){
                        cy.get("span.x4-btn-inner-center:contains('+ Add New')").should('be.hidden')
                       
                    } else {
                        cy.get("span.x4-btn-inner-center:contains('+ Add New')").should('be.visible')
                    }
                });
            });
        });
    });
}); 