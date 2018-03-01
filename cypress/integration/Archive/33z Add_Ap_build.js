describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
         .get('#j_password').type('testme33').should("have.value", "testme33")
         .get('#login-button').click()
    })

  //  it('this is it', function(){

  //      cy.wait(1000)

    
    
  //  it('open sidebar menu', function(){
       
   //     cy.wait(10000)
       
        //clicks on menu option to open SideBar
//        .get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
         
        //TODO: need substitution here for project oid
        //clicks to expand page options
 //       .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
         
        //get the custom page tile title for "Home" page section
   //     .get("h2.chr-NavigationSubmenuPageSection-sectionTitle:contains('Home')")
   //     .get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()
   // 
    
  //  it('add the apps', function(){

    //    cy.wait(10000)

        //This is how I get to the gear on a custom page and open then select the "Add App" option.
       // .get('div.smb-HeaderGroup')
  //      .get('h1.smb-HeaderGroup-title').contains('CustomPage1')
 //       .get('div.smb-Header').contains('CustomPage1')
        //This is how I get to the gear on a custom page and open then select the "Add App" option.
 //       .get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click()
 //       .get("span.smb-DropdownItem-text:contains('Add App')").click()

 it('navigates to a custom page', function(){
   // cy.visit('#/196025249156d/custom/201316480276')
     // .url().should('include','/custom')
        cy.wait(10000)

             //clicks on menu option to open SideBar
        cy.get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
         
        //TODO: need substitution here for project oid
        //clicks to expand page options
        .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
         
        //get the custom page tile title for "Home" page section
     //  .get("h2.chr-NavigationSubmenuPageSection-sectionTitle:contains('Home')")
       .get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()

      .wait(20000)
     // .click('css=button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear')
     //This is a test to verify the element and the text on the page.
     // .get('h1.smb-HeaderGroup-title').contains('CustomPage1')
     // .get('div.smb-Header').contains('CustomPage1')
      //This is how I get to the gear on a custom page and open then select the "Add App" option.
      //.get('div.smb-HeaderGroup')
      .get('span.smb-Icon.smb-Icon--gear').click({ multiple: true })
      .get("span.smb-DropdownItem-text:contains('Add App')").click()
    })      
});