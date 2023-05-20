Feature: Create new page

@user1 @web
Scenario: Login and create new page
  Given I navigate to page "<URLLOGIN>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-create-new-page-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-create-new-page-v1"
  And I enter link pages menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-create-new-page-v1"
  When I click new page
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-create-new-page-v1"
  When I enter page title "New page title"
  When I enter content new page "This is the content for the new page"
  When I click publish
  And I take screenshot with name "ref-3.x/5-create-new-page-v1"
  And I wait for 2 seconds
  When I click publish now
  And I take screenshot with name "ref-3.x/6-create-new-page-v1"
  And I wait for 2 seconds
  Then I get state new page
