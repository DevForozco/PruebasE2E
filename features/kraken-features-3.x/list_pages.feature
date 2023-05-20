Feature: List pages

@user1 @web
Scenario: Login and list pages
  Given I navigate to page "<URLLOGIN>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-list-pages-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-list-pages-v1"
  And I enter link pages menu
  And I wait for 7 seconds
  And I take screenshot with name "ref-3.x/3-list-pages-v1"
  Then I see the pages
