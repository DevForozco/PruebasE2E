Feature: Unpublish post

@user1 @web
Scenario: Login and unpublish post
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I enter email "f.orozcob@uniandes.edu.co"
  When I enter password "<PASSWORD>"
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/1-unpublish-post-v1"
  When I click login
  And I wait for 3 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 7 seconds
  And I take screenshot with name "ref-3.x/2-unpublish-post-v1"
  When I click new post
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/3-unpublish-post-v1"
  When I enter post title "post title"
  When I enter post description "This is a description"
  And I take screenshot with name "ref-3.x/4-unpublish-post-v1"
  When I click publish
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/5-unpublish-post-v1"
  When I click publish now
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/6-unpublish-post-v1"
  And I take screenshot with name "ref-3.x/7-unpublish-post-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/8-unpublish-post-v1"
  Given I click a post link
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/9-unpublish-post-v1"
  When I click publish
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/10-unpublish-post-v1"
  When I click a unpublish ratio btn
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/11-unpublish-post-v1"
  When I click a publish btn
  And I wait for 3 seconds
  Then I get title post deleted succesfully
