Feature: Delete page

@user1 @web
Scenario: Login and delete page
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-delete-page-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-delete-page-v1"
  And I enter link pages menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-delete-page-v1"
  When I click a page link
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-delete-page-v1"
  When I click a settings btn
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/5-delete-page-v1"
  When I click a delete btn
  And I take screenshot with name "ref-3.x/6-delete-page-v1"
  When I confirm delete btn
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/7-delete-page-v1"
  Then I see no pages text
