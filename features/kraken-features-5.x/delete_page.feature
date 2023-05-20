Feature: Delete page

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-delete-page-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-delete-page-v2"
  Given I navigate to page "<URLPAGES>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-delete-page-v2"
  When I click a page link
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/4-delete-page-v2"
  When I click a settings btn v5
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/5-delete-page-v2"
  When I click a delete btn v5
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/6-delete-page-v2"
  When I confirm delete btn
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/7-delete-page-v2"
  Then I get page deleted
