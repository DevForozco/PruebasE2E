Feature: Create draft

@user1 @web
Scenario: Login and create post draft
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "j.aguiar@uniandes.edu.co"
  When I enter password "prueba123+-"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  When I click new post
  And I wait for 2 seconds
  When I enter post title "Post draft title"
  When I enter post description "This is a description for post draft"
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  Then I evaluate the draft created