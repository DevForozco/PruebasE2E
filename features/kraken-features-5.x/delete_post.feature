Feature: Unpublish post

@user1 @web
Scenario: Login and unpublish post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "test-5.x/1-unpublish-post-v2"
  When I click login v5
  And I wait for 3 seconds
  Given I navigate to page "<URLPOST>"
  And I wait for 7 seconds
  And I take screenshot with name "test-5.x/2-unpublish-post-v2"
  When I click new post v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/3-unpublish-post-v2"
  When I enter post title "post title deleted"
  When I enter post description "This is a description to deleted"
  And I take screenshot with name "test-5.x/4-unpublish-post-v2"
  When I click publish v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/5-unpublish-post-v2"
  When I click publish now v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/6-unpublish-post-v2"
  When I click publish now v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/7-unpublish-post-v2"
  Given I navigate to page "<URLPOST>"
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/8-unpublish-post-v2"
  Given I click a post link v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/9-unpublish-post-v2"
  When I click publish v5
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/10-unpublish-post-v2"
  When I click a publish btn v5
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/11-unpublish-post-v2"
  Then I get post deleted text
