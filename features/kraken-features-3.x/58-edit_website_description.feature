Feature: Edit website description

@user1 @web
Scenario: Modificar descripción del sitio web
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-edit-description-v1"
  And I click login
  And I wait for 2 seconds
  Given I navigate to page "<URLGENERAL>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-description-v1"
  When I click expand button
  And I take screenshot with name "ref-3.x/3-edit-description-v1"
  When I enter site description especial aleatorio
  And I wait for 4 seconds
  And I take screenshot with name "ref-3.x/4-edit-description-v1"
  When I click save settings
  And I take screenshot with name "ref-3.x/5-edit-description-v1"
  And I wait for 2 seconds
  Given I navigate to page "<URLBASE>"
  And I take screenshot with name "ref-3.x/6-edit-description-v1"
  Then I get website description updated