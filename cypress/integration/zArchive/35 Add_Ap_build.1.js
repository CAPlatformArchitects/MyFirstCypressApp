//Author: J. Wagner AJSE-E
//Date: originated 2/26/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
         .get('#j_password').type('testme33').should("have.value", "testme33")
         .get('#login-button').click()
         cy.wait(5000)
    });
    
    it('open side nav bar', function(){
        cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()
        cy.wait(5000)
    });

    it('open page options', function(){
        cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
        cy.wait(5000)
    });
      
    it('find custom page', function(){
        //TODO custom page title substitution
        //get the custom page tile title <substitute> for "Home" page section
        cy.get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()
        cy.wait(5000)
    });

    it('add apps to custom page', function(){
        //TODO need to fix the issue with the multiple elements, need to isolate the gear icon
        //had this working, not sure why now i cannot isolate the gear icon
        cy.get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click({ multiple: true })
        //.get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click()
        cy.get("span.smb-DropdownItem-text:contains('Add App')").click()
    });      
});