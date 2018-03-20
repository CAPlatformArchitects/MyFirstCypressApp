//Author: J. Wagner AJSE-E
//Date: originated 2/26/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

describe('Add Apps', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          .wait(20000)
        });
    
    it('open side nav bar', function(){
        cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()
        });

    it('open page options', function(){
        cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()
        });
      
    it('find custom page', function(){
        //TODO custom page title substitution
        //get the custom page tile title <substitute> for "Home" page section
        cy.get('a.chr-NavigationPageTileLink:contains("CustomPage1")').click()
        });

    it('set col spec', function(){
        cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()
        cy.get("span.smb-DropdownItem-text:contains('Change Layout')").click()
        cy.get('div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-item.two_split').click()
        });

    it('add apps to custom page', function(){
        cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()
        cy.get("span.smb-DropdownItem-text:contains('Add App')").click()
        });
    
    it('select apps', function(){

        //cy.get('button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton')
        //cy.get('div.chr-Page.chr-Dashboard > span.smb-Icon.smb-Icon--gear')
     //   cy.get('span.smb-Icon.smb-Icon--gear').click({ multiple: true })
     //   cy.get("span.smb-DropdownItem-text:contains('Add App')").click()
     //cy.get('button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()

        cy.get('span.smb-Icon.smb-Icon--grid').click()
        
        cy.get('div.chr-AppTitle-title:contains("Blocked Work")')
        cy.get('tr.smb-TableRow:contains("Blocked Work")')
        cy.get('button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton')


        //3/9:3:30 Tried this code as a workaround for add button
          cy.log('OK, get ready, does it see this?')
          
          cy.get('div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters')

       //   cy.get('div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters > div.smb-Col.smb-Col--md4') 

        cy.get('div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters > div.smb-Row > div.smb-Col.smb-Col--md4')

       // cy.get('div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters > div.smb-Row > div.smb-Col.smb-Col--md4 > label.smb-FieldLabel > span.smb-FieldLabel-text:contains("SEARCH")') 

        cy.get("div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters > div.smb-Row > div.smb-Col.smb-Col--md4 > label.smb-FieldLabel > span.smb-FieldLabel-text:contains('Search')") 

        cy.get('span.smb-FieldLabel-text')

        cy.get("span.smb-FieldLabel-text:contains('Search')")


        cy.get('div.smb-Validated.smb-SearchInput > div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-empty.smb-SearchInput')
     

       // cy.get('div.smb-Grid.smb-Grid--fluid.chr-AppCatalog-filters > div.smb-Row > div.smb-Col.smb-Col--md4 > div.smb-Validated.smb-SearchInput > div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-empty.smb-SearchInput')

     
     
     
        //  cy.get('div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-focused.smb-SearchInput > input.smb-TextInput-input')
     //   div.
     // div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-focused.smb-SearchInput > input.smb-TextInput-input

     //   click here: css=div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-empty.is-focused.smb-SearchInput > input.smb-TextInput-input
    //    type here: css=div.smb-TextInput.smb-TextInput--iconPlacementStart.smb-TextInput--hasClearButton.smb-TextInput--hasIcon.smb-TextInput--sm.is-focused.smb-SearchInput > input.smb-TextInput-input
    //  hit add button here:  css=button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children



        //.type('Blocked Work').should("have.value", "Blocked Work")

        //cy.get('input.smb-TextInput-input').type('Blocked Work').should("have.value", "Blocked Work")
        cy.get('button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton')



        
        // cy.get('tr.smb-TableRow:contains("Blocked Work") > > > > button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton')


// /div[11]/div/div[2]/div/div/div[2]/div/div[3]/table/tbody/tr[3]/td[4]/button/div/span

        //to view grid:  smb-Icon smb-Icon--grid
        //"<div class="chr-AppTitle-title">Blocked Work</div>"


      //  "<div class="chr-AppTile"><div class="chr-AppTile-contentWrapper"><img class="chr-AppTile-previewImage" src="/slm/js/rally/ui/dashboard/panels/blockinghistory/preview.png" alt=""><div class="chr-AppTitle-titleBar"><div class="chr-AppTitle-title">Blocking History</div><div class="smb-PopoverTrigger"><div><span class="smb-Label smb-Label--default chr-Badge chr-Badge--blue">Core</span></div><!-- react-empty: 38584 --></div></div><div class="chr-AppTile-description">See when User Stories and Tasks were blocked and/or unblocked.</div></div><div class="smb-Grid smb-Grid--fluid chr-AppTile-details"><div class="smb-Row"><div class="smb-Col smb-Col--md10"><button class="smb-Button smb-Button--primary smb-Button--sm chr-AppAddButton" role="button" type="button"><div class="smb-Button-contents"><span class="smb-Button-children">Add</span></div></button></div><div class="smb-Col smb-Col--md2"><div class="chr-GithubLink"><div class="smb-PopoverTrigger"><div><button class="smb-Button smb-Button--link smb-Button--sm" role="button" type="button"><div class="smb-Button-contents"><span class="smb-Button-children"><span class="chr-GithubLink-octocat"></span><span>GitHub</span></span></div></button></div><!-- react-empty: 41828 --></div></div></div></div></div></div>"

     //  [info] Executing: | clickAt | css=button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children | 12,5 |





        });      
});