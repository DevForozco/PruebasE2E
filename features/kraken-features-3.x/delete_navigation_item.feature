Feature: Delete item from navigation

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "forozcob@uniandes.edu.co"
  And I enter password "Pruebas123***"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
  And I wait for 2 seconds
  When I click delete navigation item button
  When I click save settings
  And I wait for 2 seconds
  Then I get item navigation deleted