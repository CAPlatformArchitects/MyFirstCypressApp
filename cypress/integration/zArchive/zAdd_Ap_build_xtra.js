describe('Add Apps', function(){
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
         //This is a test to verify the element and the text on the page.
          .get('h1.smb-HeaderGroup-title').contains('My New Page')
          .get('div.smb-Header').contains('My New Page')
          //This is how I get to the gear on a custom page and open then select the "Add App" option.
         // .get('div.smb-HeaderGroup').get('span.smb-Icon.smb-Icon--gear').click()
          //.get("span.smb-DropdownItem-text:contains('Add App')").click()

         // .get('h2.chr-NavigationSubmenuPageSection').get("span.customPagesAddButton--home:contains('New Custom Page')").click()
          
          .get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
            //??not sure why cypress thinks this is multiple element clicks??
          //.get('div.chr-NavigationSidebarPagesHeader.smb-Icon.smb-Icon--more').click({ multiple: true })

          .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()


         // <div class=""><h2 class="chr-NavigationSidebarPagesHeader-title">Pages</h2><div class="chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156"><span title="Shopping Team Pages"><button aria-label="Shopping Team Pages" class="smb-Button smb-Button--icon smb-Button--lg chr-NavigationSidebarPagesHeader-ellipsisButton" role="button" type="button"><div class="smb-Button-contents"><span class="smb-Button-icon"><span aria-label="Shopping Team Pages" class="smb-Icon smb-Icon--more"></span></span></div></button></span></div></div>
    })
});
//<span aria-hidden="true" class="smb-DropdownItem-text">Add App...</span>