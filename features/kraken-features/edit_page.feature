Feature: Edit a page

@user1 @web
Scenario: Login and edit page
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "j.aguiar@uniandes.edu.co"
  When I enter password "prueba123+-"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  And I enter link pages menu
  And I wait for 7 seconds
  When I click a page link
  And I wait for 2 seconds
  When I enter page title "Second title"
  When I enter content page "Page edited"
  And I wait for 2 seconds
  When I click update
  And I wait for 2 seconds
  When I click update now
  And I wait for 2 seconds
  Then I get state page edited
