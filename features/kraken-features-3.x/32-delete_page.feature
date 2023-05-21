Feature: Delete page

@user1 @web
Scenario: Login and delete page
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-delete-page-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-delete-page-v1"
  And I enter link pages menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-delete-page-v1"
  When I click new page
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-create-new-page-v1"
  When I enter post long title
  When I enter valid content
  Then I can't see publish button
