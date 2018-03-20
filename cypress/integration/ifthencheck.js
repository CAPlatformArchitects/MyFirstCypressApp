describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          .wait(20000)
          //TODO: need to obvuscate username and password
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
        });
        
    it('turn personal nav on', function(){
        cy.get('img.chr-NavigationProfileMenu-avatar').click()
        .get("span.smb-DropdownItem-text:contains('New Features')").click()
        .get('div.smb-Checkbox.is-checked')
    //    cy.get('div.smb-Checkbox')

  //  cy.get('div.smb-Checkbox:checkbox').should('be.disabled')

  //  cy.get('div.smb-Checkbox').should('have.class', 'is-checked')

  //  .get('div.smb-Checkbox.is-checked').click()

  //  cy.get('div.smb-Checkbox').should('not.have.class', 'is-checked')

  //maybe test if img.chr-NavigationProfileMenu-avatar with hasclass?

    cy.get('div.smb-Checkbox').then(($btn) => {
        if ($btn.hasClass('is-checked')){
            cy.get('div.smb-Checkbox')
        } else {
            cy.get('div.smb-Checkbox').click()
        }
    })

  //  cy.get('button').then(($btn) => {
   //     if ($btn.hasClass('active')) {
  //        // do something if its active
  //      } else {
  //        // do something else
  //      }
 //     })



    
/*
    //.get('div.smb-Checkbox.is-checked').should("have.value", )

            cy.get('div.smb-Checkbox')
              if (div.smb-Checkbox.hasClass('is-checked')) {
                  // do nothing no click
                cy.get('div.smb-Checkbox.is-checked')

              } else {
                // set class to selected click
                cy.get('div.smb-Checkbox').click()
                }*/
        });
    });
    