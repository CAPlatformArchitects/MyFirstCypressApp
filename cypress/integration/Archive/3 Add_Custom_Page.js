//Author: J. Wagner AJSE-E
//Date: originated 2/20/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

describe('Login and Add Custom Page to Home Menu', function(){
    before(function(){
        cy.visit('/slm/login.op')
         .get('#j_username').type('admin@sales.acme.com').should("have.value", "admin@sales.acme.com")
         .get('#j_password').type('p@ssw0rd').should("have.value", "p@ssw0rd")
         //TODO: need to obvuscate username and password
         .get('#login-button').click()
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
         })

    it('adds a custom page', function(){
        //navigate to a custom page
     // cy.visit('#/196025249156d/custom/200121526740')
     //   .url().should('include','/custom')
        
        //wait for the page to load
        
        cy.wait(10000)
        //clicks on menu option to open SideBar
     //   cy.get('div.smb-TopBarSection').get('span.smb-Icon.smb-Icon--grid').click()
          
        //clicks to expand page options
    //    .get('div.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper.chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--196025249156').click()
        
        //add a custom page.
        //get the "+" to add a custom page for "Home" <<change this for other page menu headings.
       // .get('span.chr-NavigationSubmenuPageSection-customPagesAddButton.chr-NavigationSubmenuPageSection-customPagesAddButton--home').click()
        
    //    cy.wait(10000)
       // .get('input#name').type('newpagesucess')
        //populate the page to add custom page
       // .get('win_ser_1')
       // .get('div.field-label')
    //   cy.visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=myhome')
    cy.visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=myhome')
      //   .get('input#name').type('12')

       //will add this line, then simply navigate to the elements on the page and fill them out as I would normally.

    })
});