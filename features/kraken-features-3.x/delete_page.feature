Feature: Delete page

@user1 @web
Scenario: Login and delete page
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "forozcob@uniandes.edu.co"
  When I enter password "Pruebas123***"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  And I enter link pages menu
  And I wait for 2 seconds
  When I click a page link
  And I wait for 2 seconds
  When I click a settings btn
  And I wait for 3 seconds
  When I click a delete btn
  When I confirm delete btn
  And I wait for 3 seconds
  Then I see no pages text