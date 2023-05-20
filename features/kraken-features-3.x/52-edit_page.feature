Feature: Edit a page

@user1 @web
Scenario: Edit page con supera limites titulo
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-edit-page-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-page-v1"
  And I enter link pages menu
  And I wait for 4 seconds
  And I take screenshot with name "ref-3.x/3-edit-page-v1"
  When I click a page link
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-edit-page-v1"
  When I enter exceeds title
  When I enter valid content
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/5-edit-page-v1"
  When I click update
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-page-v1"
  When I click update now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/7-edit-page-v1"
  Then I get state page cant edit