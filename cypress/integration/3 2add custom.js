describe('Navigation Tests', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
         .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
         .get('#login-button').click()
    })

    it('navigates to a custom page', function(){
        cy.visit('#/196025249156d/custom/200121526740')
          .url().should('include','/custom')

          .wait(20000)
         // .click('css=button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear')
          .get('h1.smb-HeaderGroup-title').contains('My New Page')
          .get('div.smb-Header').contains('My New Page')
          .get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click()
    })
});