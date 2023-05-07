Feature: Edit navigation item

@user1 @web
Scenario: Modificar un item de la navegación
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "forozcob@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password "Pruebas123***"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
  And I wait for 2 seconds
  When I change nav item text "Index"
  And I wait for 1 seconds
  When I click save settings
  Given I navigate to page "http://localhost:2368"
  Then I get nav item updated
