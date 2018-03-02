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
         //Note: "not secure" message OK when running, Cypress nmodifies traffic hense the message.
        });
        
        //TODO: add logic to add multiple pages to multiple popup urls
        //visits the pop up page (without project oid) and populates form
        //select share with all projects by default (don't ask to share with specific projects!)
        //workspace and project agnostic (no project share options)
        //Home, Plan, Track, Quality, Portfolio, Reports

        //Home
    it('adds a custom page', function(){
        cy.visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=myhome')
        .get('input#name').type('CustomPage1')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Plan
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=backlogandschedules')
        .get('input#name').type('CustomPage2')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Track
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=dashboards')
        .get('input#name').type('CustomPage3')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Quality
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=defectsandtests')
        .get('input#name').type('CustomPage4')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Portfolio
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=portfolio')
        .get('input#name').type('CustomPage5')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Reports
        .visit('/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=reports')
        .get('input#name').type('CustomPage6')
        .get('input#sharedWithAllProjects').click()
        .get('button#save_and_close_btn.ed-btn-wide').click()

        //Home
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=myhome
        //Plan
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=backlogandschedules
        //Track
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=dashboards
        //Quality
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=defectsandtests
        //Portfolio
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=portfolio
        //Reports
        //  /slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=reports
        
    });

});