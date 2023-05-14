Feature: Create new page

@user1 @web
Scenario: Login and create new page
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "j.aguiar@uniandes.edu.co"
  When I enter password "prueba123+-"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  And I enter link pages menu
  And I wait for 2 seconds
  When I click new page
  And I wait for 2 seconds
  When I enter page title "New page title"
  When I enter content new page "This is the content for the new page"
  When I click publish
  And I wait for 2 seconds
  When I click publish now
  And I wait for 2 seconds
  Then I get state new page