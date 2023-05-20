Feature: Change publication language

@user1 @web
Scenario: Cambiar lenguaje del sitio web
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-change-language-v1"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  Given I navigate to page "<URLGENERAL>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-change-language-v1"
  When I click last expand button
  And I take screenshot with name "ref-3.x/3-change-language-v1"
  When I enter new lenguage identifier
  And I take screenshot with name "ref-3.x/4-change-language-v1"
  When I click save settings
  And I take screenshot with name "ref-3.x/5-change-language-v1"
  Given I navigate to page "<URLBASE>"
  And I take screenshot with name "ref-3.x/6-change-language-v1"
  Then I get website language updated
