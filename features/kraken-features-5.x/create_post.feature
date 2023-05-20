Feature: Publish post

@user1 @web
Scenario: Login and publish post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-create-post-v2"
  When I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-create-post-v2"
  Given I navigate to page "<URLPOST>"
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
