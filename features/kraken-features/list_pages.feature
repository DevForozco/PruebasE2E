Feature: List pages

@user1 @web
Scenario: Login and list pages
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "j.aguiar@uniandes.edu.co"
  When I enter password "prueba123+-"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  And I enter link pages menu
  And I wait for 7 seconds
  Then I see the pages