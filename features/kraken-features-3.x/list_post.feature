Feature: List posts

@user1 @web
Scenario: Login, publish & list posts
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-list-post-v1"
  When I click login
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/2-edit-post-v1"
  Given I navigate to page "<URLPOST>"
  And I wait for 7 seconds
  And I take screenshot with name "ref-3.x/3-list-post-v1"
  When I click new post
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/4-list-post-v1"
  When I enter post title "post title"
  When I enter post description "This is a description"
  And I take screenshot with name "ref-3.x/5-list-post-v1"
  When I click publish
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/6-list-post-v1"
  When I click publish now
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/7-list-post-v1"
  Given I navigate to page "<URLPOST>"
  And I take screenshot with name "ref-3.x/8-list-post-v1"
  When I click new post
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/8-list-post-v1"
  When I enter post title "post title"
  When I enter post description "This is a description"
  And I take screenshot with name "ref-3.x/9-list-post-v1"
  When I click publish
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/10-list-post-v1"
  When I click publish now
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/11-list-post-v1"
  Given I navigate to page "<URLPOST>"
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/12-list-post-v1"
  Then I see at least one post
