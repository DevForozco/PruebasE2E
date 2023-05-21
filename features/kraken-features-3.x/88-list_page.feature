Feature: list pages

@user1 @web
Scenario: Listar páginas
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
  When I enter post title with special characters
  When I enter valid content
  When I click publish
  And I wait for 1 seconds
  When I click publish blue button
  And I wait for 1 seconds
  Given I navigate to page "<URLPAGES>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/5-create-new-page-v1"
  Then I see the pages
  