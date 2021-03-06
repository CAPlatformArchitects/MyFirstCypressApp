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
    var PageSec, PageName, PageNameApp, AppName, PageSecLen, PageNameLen, PageNameAppLen, i, j, k;
    PageSec = [//inc w/i
      "myhome",//Home
      "backlogandschedules",//Plan
      "backlogandschedules",//Plan
      "dashboards"//Track
//      "defectsandtests",//Quality
  //    "portfolio",//Portfolio
    //  "reports"//Reports
        ];
      PageName = [//inc w/j
        "Team Retrospective",//Home
        "Estimation Board",//Plan
        "Planning Board",//Plan
        "Task Board"//Track
        ];

      PageNameApp = [//inc w/j
        "Team Retrospective",//Home
        "Team Retrospective",//Home
        "Team Retrospective",//Home
        "Team Retrospective",//Home
        "Estimation Board",//Plan
        "Planning Board",//Plan
        "Task Board"//Track
        ];
      AppName = [
        "Iteration Retrospective",//Team Retrospective
        "Iteration Burndown",//Team Retrospective
        "Iteration Cummulative Flow",//Team Retrospective
        "Iteration Scope Change",//Team Retrospective
        "Estimation Board (New)",//Estimation Board
        "Iteration Planning Board",//Planning Board
        "Task Board"//Task Board
        ];
      
    

//kill apps here
PageNameAppLen = PageNameApp.length;
    for (i = 0; i < PageNameAppLen; i++) {
      cy.visit('/slm/')
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()//open side nav bar
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()//open page options
      cy.get(`a.chr-NavigationPageTileLink:contains(${PageNameApp[i]})`).click()//find custom page
     
      cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click() //click on gear, set column spec
      cy.get('span.smb-DropdownItem-text:contains("Change Layout")').click()//set column spec
      cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.two_split').click()//Two Split

    //  cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.single').click() //Single IFF Col Flag Set
    //  cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.two_weighted_left').click() //two with weighted left
    //  cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.two_weighted_right').click() //two with weighted right
    //  cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.three_weighted_center').click() //three weighted center
    cy.wait(10000)
      cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click({ force: true })
      cy.get("span.smb-DropdownItem-text:contains('Add App')").click()//Add App
      cy.get('span.smb-Icon.smb-Icon--grid').click()
      cy.log('Adding Apps Here!!')
      cy.log(`The /index is ${i} /PageNameApp is ${PageNameApp[i]} /AppName is ${AppName[i]}`)
      cy.get(`tr.smb-TableRow:contains(${AppName[i]}) > td.smb-TableCell.u-textLeft > button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children`).click()
      }

  });
});
