Feature: Schedule post

@user1 @web
Scenario: Login and schedule post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "f.orozcob@uniandes.edu.co"
  When I enter password "Pruebas123***"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-schedule-post-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-schedule-post-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-schedule-post-v1"
  When I click new post
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-schedule-post-v1"
  When I enter post title "post title"
  When I enter post description edition "This is a description"
  And I take screenshot with name "ref-3.x/5-schedule-post-v1"
  When I click publish
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-schedule-post-v1"
  When I click a schedule ratio btn
  And I wait for 5 seconds
  And I take screenshot with name "ref-3.x/7-schedule-post-v1"
  When I click a publish btn
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/8-schedule-post-v1"
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=scheduled"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/9-schedule-post-v1"
  And I wait for 2 seconds