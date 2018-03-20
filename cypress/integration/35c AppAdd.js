//Author: J. Wagner AJSE-E
//Date: originated 2/26/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          .wait(20000)
        });
    
    it('open side nav bar', function(){
        cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()
        });

    it('open page options', function(){
        cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
        });
      
    it('find custom page', function(){
        //TODO custom page title substitution
        //get the custom page tile title <substitute> for "Home" page section
        cy.get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()
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

        cy.get('span.smb-Icon.smb-Icon--grid').click()
        
    //3/14:14:00 This code clicks on specific add button.
        cy.log('Adding Apps Here!!')

        cy.get('tr.smb-TableRow:contains("Blocked Work") > td.smb-TableCell.u-textLeft > button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children').click()
          
      
          
      

  

        });      
});