describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
         .get('#j_password').type('testme33').should("have.value", "testme33")
         .get('#login-button').click()
    })
 
 it('add apps to page', function(){
        cy.wait(10000)

        //clicks on menu option to open SideBar
        cy.get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
         
        //TODO: need substitution here for project oid
        //clicks to expand page options
        //next two lines try to avoid substitution, not sure if robust enough yet
        .get('h2.chr-NavigationSidebarPagesHeader-title:contains("Pages")')
        .get('div.smb-Icon.smb-Icon--more').click({ multiple: true })
      //  .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
         
        //get the custom page tile title <substitute> for "Home" page section
        .get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()
        .wait(10000)
        .get('span.smb-Icon.smb-Icon--gear').click({ multiple: true })
        .get("span.smb-DropdownItem-text:contains('Add App')").click()
    })      
});