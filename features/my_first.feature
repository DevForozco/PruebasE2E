Feature: Publicacion de post

@user1 @web
Scenario: Creación de post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  When I click new post button
  And I wait for 2 seconds
  When I enter post title "<POST_TITLE>"
  And I wait for 2 seconds
  When I writing your post "<POST_DESCRIPTION>"
  And I wait for 2 seconds
  When I enter "<POST_DESCRIPTION>"
  When I click publish button
  And I wait for 2 seconds
  When I click Continue btn
  And I wait for 2 seconds
  When I click publish now btn
  And I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 5 seconds