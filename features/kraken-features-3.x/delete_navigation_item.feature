Feature: Delete item from navigation

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-delete-item-navigation-v1"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-delete-item-navigation-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-delete-item-navigation-v1"
  When I click delete navigation item button
  When I click save settings
  And I take screenshot with name "ref-3.x/4-delete-item-navigation-v1"
  And I wait for 2 seconds
  Then I get item navigation deleted
