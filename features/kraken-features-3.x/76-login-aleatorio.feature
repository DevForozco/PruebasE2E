Feature: Login aleatorio

@user1 @web
Scenario: Login con datos aleatorios
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter a random email
  When I enter a random password
  When I click login
  And I wait for 3 seconds


