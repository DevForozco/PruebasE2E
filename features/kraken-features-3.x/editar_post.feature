Feature: Edit a post

@user1 @web
Scenario: Login and edit post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "f.orozcob@uniandes.edu.co"
  When I enter password "Pruebas123***"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 7 seconds
  When I click new post
  And I wait for 2 seconds
  When I enter post title "post title"
  When I enter post description "This is a description"
  When I click publish
  And I wait for 2 seconds
  When I click publish now
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 2 seconds
  When I click a post link
  And I wait for 2 seconds
  When I enter post title "Second title"
  And I wait for 2 seconds
  When I enter post description edition "This is a edition"
  And I wait for 2 seconds
  When I click publish
  And I wait for 2 seconds
  When I click publish now
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 3 seconds