Feature: Publish post

@user1 @web
Scenario: Login and publish post
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email v5 "<USERNAME>"
  When I enter password v5 "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-create-post-v2"
  When I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-create-post-v2"
  Given I navigate to page "http://localhost:2370/ghost/#/posts"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-create-post-v2"
  When I click new post v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/4-create-post-v2"
  When I enter post title "post title"
  When I enter post description "This is a description"
  And I take screenshot with name "test-5.x/5-create-post-v2"
  When I click publish v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/6-create-post-v2"
  When I click publish now v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/7-create-post-v2"
  Then I get post succesfully text
