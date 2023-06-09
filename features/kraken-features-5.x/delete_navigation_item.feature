Feature: Delete item from navigation

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-delete-item-navigation-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-delete-item-navigation-v2"
  Given I navigate to page "<URLNAVIGATION>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-delete-item-navigation-v2"
  When I click delete navigation item button
  When I click save settings v5
  And I take screenshot with name "test-5.x/4-delete-item-navigation-v2"
  And I wait for 1 seconds
  Then I get item navigation deleted v5
