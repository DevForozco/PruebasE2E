Feature: Create new page

@user1 @web
Scenario: new page con los campos obligatorios vacios
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
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
  When I enter without title
  When I enter without content
  When I click publish
  And I take screenshot with name "ref-3.x/5-create-new-page-v1"
  And I wait for 2 seconds
  When I click publish now
  And I take screenshot with name "ref-3.x/6-create-new-page-v1"
  Given I navigate to page "<URLPAGES>"
  And I wait for 2 seconds