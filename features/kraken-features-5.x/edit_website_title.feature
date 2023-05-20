Feature: Edit website title

@user1 @web
Scenario: Modificar título del website
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-change-title-website-v2"
  And I click login v5
  And I wait for 2 seconds
  Given I navigate to page "<URLGENERAL>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-change-title-website-v2"
  When I click expand button v5
  And I take screenshot with name "test-5.x/3-change-title-website-v2"
  When I enter site title "New site title"
  And I take screenshot with name "test-5.x/4-change-title-website-v2"
  When I click save settings v5
  And I take screenshot with name "test-5.x/5-change-title-website-v2"
  And I wait for 1 seconds
  Then I get website title updated v5
