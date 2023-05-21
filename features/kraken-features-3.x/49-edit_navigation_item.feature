Feature: Edit navigation item

@user1 @web
Scenario: Modificar un item de la navegación
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-edit-item-navigation-v1"
  And I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-item-navigation-v1"
  Given I navigate to page "<URLSETTINGS>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-edit-item-navigation-v1"
  When I change nav item url to have special characters
  When I click save settings
  And I wait for 1 seconds
  And I take screenshot with name "ref-3.x/4-edit-item-navigation-v1"
  Then I get nav item url restored
