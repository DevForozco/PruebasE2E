Feature: Delete item from navigation

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I enter email v5 "n.reyd@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password v5 "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-delete-item-navigation-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-delete-item-navigation-v2"
  Given I navigate to page "http://localhost:2368/ghost/#/settings/navigation"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-delete-item-navigation-v2"
  When I click delete navigation item button
  When I click save settings v5
  And I take screenshot with name "test-5.x/4-delete-item-navigation-v2"
  And I wait for 1 seconds
  Then I get item navigation deleted v5
