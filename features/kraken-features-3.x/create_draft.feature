Feature: Create draft

@user1 @web
Scenario: Login and create post draft
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-create-draft-v1"
  When I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-create-draft-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-create-draft-v1"
  When I click new post
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-create-draft-v1"
  When I enter post title "Post draft title"
  When I enter post description "This is a description for post draft"
  And I take screenshot with name "ref-3.x/5-create-draft-v1"
  Given I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-create-draft-v1"
  Then I evaluate the draft created
