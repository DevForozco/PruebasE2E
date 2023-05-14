Feature: Delete page

@user1 @web
Scenario: Eliminar un item de la navegacion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email v5 "n.reyd@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password v5 "Pruebas123***"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-delete-page-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-delete-page-v2"
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
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