Feature: Schedule post

@user1 @web
Scenario: Login and schedule post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "f.orozcob@uniandes.edu.co"
  When I enter password "Pruebas123***"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 2 seconds
  When I click new post
  And I wait for 2 seconds
  When I enter post title "post title"
  When I enter post description edition "This is a description"
  When I click publish
  And I wait for 2 seconds
  When I click a schedule ratio btn
  And I wait for 5 seconds
  When I click a publish btn
  And I wait for 2 seconds
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=scheduled"
    And I wait for 2 seconds
  And I wait for 2 seconds