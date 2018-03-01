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

    it('set col spec', function(){
        cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()
        cy.get("span.smb-DropdownItem-text:contains('Change Layout')").click()
        cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.two_split').click()
        });

    it('add apps to custom page', function(){
        cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()
        cy.get("span.smb-DropdownItem-text:contains('Add App')").click()
        });
    
    it('select apps', function(){

        //cy.get('button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton')
        //cy.get('div.chr-Page.chr-Dashboard > span.smb-Icon.smb-Icon--gear')
     //   cy.get('span.smb-Icon.smb-Icon--gear').click({ multiple: true })
     //   cy.get("span.smb-DropdownItem-text:contains('Add App')").click()
        cy.get('div.chr-AppTitle-title:contains("Blocked Work")')


        //to view grid:  smb-Icon smb-Icon--grid
        //"<div class="chr-AppTitle-title">Blocked Work</div>"

        });      
});