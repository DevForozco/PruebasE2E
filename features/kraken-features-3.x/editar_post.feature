Feature: Edit a post

@user1 @web
Scenario: Login and edit post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "f.orozcob@uniandes.edu.co"
  When I enter password "Pruebas123***"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-edit-post-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-post-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 7 seconds
  And I take screenshot with name "ref-3.x/3-edit-post-v1"
  When I click new post
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-edit-post-v1"
  When I enter post title "post title"
  When I enter post description "This is a description"
  And I take screenshot with name "ref-3.x/5-edit-post-v1"
  When I click publish
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-post-v1"
  When I click publish now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/7-edit-post-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/8-edit-post-v1"
  When I click a post link
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/9-edit-post-v1"
  When I enter post title "Second title"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/10-edit-post-v1"
  When I enter post description edition "This is a edition"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/11-edit-post-v1"
  When I click publish
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/12-edit-post-v1"
  When I click publish now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/13-edit-post-v1"
  Then I get title post updated succesfully
