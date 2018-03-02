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
      });
      it('open page options', function(){
        cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
      });
      
 it('add apps to page', function(){
      //  cy.wait(10000)

        //clicks on menu option to open SideBar
        cy.get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
         
        //clicks to expand page options
        cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
        //.get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
         
        //get the custom page tile title <substitute> for "Home" page section
        .get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()

        .wait(10000)
        .get('div.smb-Header.span.smb-Icon.smb-Icon--gear').click()
        //.get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click()
        .get("span.smb-DropdownItem-text:contains('Add App')").click()
    })      
});