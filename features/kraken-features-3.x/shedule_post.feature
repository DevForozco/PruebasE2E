Feature: Schedule post

@user1 @web
Scenario: Login and schedule post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-schedule-post-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-schedule-post-v1"
  Given I navigate to page "<URLPOST>"
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
  Then I get title post scheduled succesfully
