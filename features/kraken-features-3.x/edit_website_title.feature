Feature: Edit website title

@user1 @web
Scenario: Modificar título del website
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "forozcob@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password "Pruebas123***"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/settings/general"
  And I wait for 2 seconds
  When I click expand button
  When I enter site title "New site title"
  When I click save settings
  And I wait for 1 seconds
  Then I get website title updated
