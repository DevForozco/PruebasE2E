Feature: Edit a post

@user1 @web
Scenario: Edit post con datos invalidos en descripcion
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-edit-post-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-post-v1"
  Given I navigate to page "<URLPOST>"
  And I wait for 7 seconds
  And I take screenshot with name "ref-3.x/3-edit-post-v1"
  When I click new post
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-edit-post-v1"
  When I enter post valid title
  When I enter post valid description
  And I take screenshot with name "ref-3.x/5-edit-post-v1"
  When I click publish
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-post-v1"
  When I click publish now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/7-edit-post-v1"
  Given I navigate to page "<URLPUBLISHED>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/8-edit-post-v1"
  When I click a post link
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/9-edit-post-v1"
  When I enter post valid title
  When I enter post invalid description
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/11-edit-post-v1"
  When I click publish
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/12-edit-post-v1"
  When I click publish now
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/13-edit-post-v1"
  Then I get title post updated succesfully
