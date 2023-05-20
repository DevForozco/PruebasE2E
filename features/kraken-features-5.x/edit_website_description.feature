Feature: Edit website description

@user1 @web
Scenario: Modificar descripción del sitio web
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email v5 "<USERNAME>"
  And I wait for 1 seconds
  And I enter password v5 "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-edit-description-v2"
  And I click login v5
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2370/ghost/#/settings/general"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-edit-description-v2"
  When I click expand button v5
  And I take screenshot with name "test-5.x/3-edit-description-v2"
  When I enter site description "New site description"
  And I take screenshot with name "test-5.x/4-edit-description-v2"
  When I click save settings v5
  And I take screenshot with name "test-5.x/5-edit-description-v2"
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2370/"
  And I take screenshot with name "test-5.x/6-edit-description-v2"
  Then I get website description updated
