Feature: Schedule post

@user1 @web
Scenario: Schedule page con supera limites titulo
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
  When I enter post dinamic exceeds title
  When I enter post dinamic description
  And I take screenshot with name "ref-3.x/5-schedule-post-v1"