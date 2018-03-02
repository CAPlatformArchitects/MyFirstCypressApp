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
         .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
         .get('#j_password').type('testme33').should("have.value", "testme33")
         //TODO: need to obvuscate username and password
         .get('#login-button').click()
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
    })
    it('adds a custom page', function(){
        cy.wait(10000)
        //visits the pop up page (without project oid) and populates form
        //select share with all projects by default (don't ask to share with specific projects!)
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=myhome')
        .get('input#name').type('CustomPage1')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()
    })
    
    it('navigates to a custom page', function(){
            cy.visit('#/196025249156d/custom/201316480276')
              .url().should('include','/custom')


    })
});