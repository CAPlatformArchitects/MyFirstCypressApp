describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
         .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
         .get('#login-button').click()
    })
 it('clicks thru menu', function(){
   // it('navigates to a custom page', function(){
   //     cy.visit('#/196025249156d/custom/200121526740')
   //       .url().should('include','/custom')
        //wait for the page to load
         
          cy.wait(20000)
          //Just to test that the page is there
   //       .get('h1.smb-HeaderGroup-title').contains('My New Page')
    //      .get('div.smb-Header').contains('My New Page')
     
          //clicks on menu option to open SideBar
          .get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
          
          //clicks to expand page options
          .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
          
          //get the "+" on custom page for "Home"
          .get("h2.chr-NavigationSubmenuPageSection-sectionTitle:contains('Home')")
          .get ('a.chr-NavigationPageTileLink:contains("CustomPage1")')
          .get('div.chr-NavigationSubmenuPageSection-customPagesHeaderWrapper')
          .get('span.chr-NavigationSubmenuPageSection-customPagesAddButton.chr-NavigationSubmenuPageSection-customPagesAddButton--home').click()
         
    })
});