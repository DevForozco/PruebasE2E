Feature: Post aleatorio

@user1 @web
Scenario: Post escenario aleatorio
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
  When I enter post dinamic title
  When I enter post dinamic description
  And I take screenshot with name "ref-3.x/5-schedule-post-v1"
  When I click publish
  When I click publish blue button
  And I wait for 1 seconds
