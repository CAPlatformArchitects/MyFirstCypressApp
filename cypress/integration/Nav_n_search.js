describe('Navigation Tests', function(){
    before(function(){
        cy.visit('/login.op')
         .get('#j_username').type('test@rallydev.com').should("have.value", "test@rallydev.com")
         .get('#j_password').type('Password').should("have.value", "Password")
         .get('#login-button').click()
    });
    
    it('open side nav bar', function(){
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()   
    });
     
    it('open page options', function(){
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
    }); 

    it('enter text on search pages', function(){
      cy.get('#viewport > div > nav.chr-ComponentsSideBar.chr-NavigationSubmenuContainer > div.chr-NavigationSubmenuContainer-searchWrapper > div > div > input').type('Team Board').should("have.value", "Team Board")
    }); 

    it('pin Team Board', function(){
      cy.get('#viewport > div > nav.chr-ComponentsSideBar.chr-NavigationSubmenuContainer > div.chr-ComponentsScrollContainer.chr-ComponentsScrollContainer--submenu > div > div:nth-child(1) > div > div > div > div:nth-child(3) > div > button').trigger('mouseover').click().should('have.class', 'is-pinned');
    });
});