Feature: Publish post

@user1 @web
Scenario: New post con supera limites titulo
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-create-post-v1"
  And I wait for 2 seconds
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-create-post-v1"
  Given I navigate to page "<URLPOST>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-create-post-v1"
  When I click new post
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-create-post-v1"
  When I enter post exceeds titulo
  When I enter post valid description
  And I take screenshot with name "ref-3.x/5-create-post-v1"
  Then I validate publish btn
