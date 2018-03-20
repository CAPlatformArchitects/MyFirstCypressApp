//Author: J. Wagner AJSE-E
//Date: originated 2/26/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

  describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          .wait(20000)
          //TODO: need to obvuscate username and password
          //TODO: may need to pass in parameter to run this for workspace under creation
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
        });

 it('adds a custom page', function(){
    var PageSec, len, i, x;
    PageSec = [
      "myhome",//Home
      "backlogandschedules",//Plan
      "dashboards",//Track
      "defectsandtests",//Quality
      "portfolio",//Portfolio
      "reports"//Reports
      ];
    len = PageSec.length;
    for (i = 0; i < len; i++) {


      x = PageSec[i]
      cy.log(`the value of ${i} and the value of endurl is ${PageSec[i]}`)

      function createpage(x){
        cy.visit(`/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=${x}`)
        cy.log(`the value of ${i} and the value of endurl is ${x}`)
        cy.get('input#name').type(`CustomPage${i}`)
        cy.get('input#sharedWithAllProjects').click()
        cy.get('input#no_scope_radio').click()//IFF no flags set (DEFAULT)
        cy.get('input#iteration_scope_radio')//.click()//IFF flag set for iteration scope
        cy.get('input#release_radio')//.click()//IFF flag set for release scope
        cy.get('input#milestone_radio')//.click()//IFF flag set for milestone scope
        cy.get('button#save_and_close_btn.ed-btn-wide').click()
        };
      };
    });
});