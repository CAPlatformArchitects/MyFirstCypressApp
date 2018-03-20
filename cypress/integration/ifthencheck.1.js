describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          .wait(20000)
          cy.log('this is a message to the console')
          //TODO: need to obvuscate username and password
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
        });
        
    it('turn personal nav on', function(){
        //cy.get('img.chr-NavigationProfileMenu-avatar').click()
       // .get("span.smb-DropdownItem-text:contains('New Features')").click()
        //.get('div.smb-Checkbox.is-checked')
        
   //3/9/:3:40 - figure out how to do an if/then to turn on personal navigation.  I may be able to asume it is always off initially.
    cy.get('div.img').then(($img) => {
        if ($img.hasClass('chr-NavigationProfileMenu-avatar')){
            cy.print('yes')
            cy.print($img)
        } else {
            cy.print('no')
            cy.print($img)
        }
    })

     
/*
    
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
    