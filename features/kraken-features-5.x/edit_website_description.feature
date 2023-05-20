Feature: Edit website description

@user1 @web
Scenario: Modificar descripción del sitio web
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-edit-description-v2"
  And I click login v5
  And I wait for 2 seconds
  Given I navigate to page "<URLGENERAL>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-edit-description-v2"
  When I click expand button v5
  And I take screenshot with name "test-5.x/3-edit-description-v2"
  When I enter site description "New site description"
  And I take screenshot with name "test-5.x/4-edit-description-v2"
  When I click save settings v5
  And I take screenshot with name "test-5.x/5-edit-description-v2"
  And I wait for 2 seconds
  Given I navigate to page "<URLBASE>/"
  And I take screenshot with name "test-5.x/6-edit-description-v2"
  Then I get website description updated
