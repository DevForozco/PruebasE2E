Feature: Edit a page

@user1 @web
Scenario: Login and edit page
  Given I navigate to page "<URLLOGIN>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
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
  When I enter page title "Second title"
  When I enter content page "Page edited"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/5-edit-page-v1"
  When I click update
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-page-v1"
  When I click update now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/7-edit-page-v1"
  Then I get state page edited
