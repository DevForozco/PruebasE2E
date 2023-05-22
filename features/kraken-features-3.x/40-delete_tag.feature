Feature: Delete Tag

@user1 @web
Scenario: Creación de post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-delete-tag-v1"
  And I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-delete-tag-v1"
  And I enter link tag menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-delete-tag-v1"
  And I enter new tag
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-delete-tag-v1"
  And I enter name tag character especial
  And I wait for 1 seconds
  And I enter color tag
  And I wait for 2 seconds
  And I enter slug tag
  And I wait for 1 seconds
  And I enter description tag numeric
  And I wait for 1 seconds
  And I click save tag
  And I wait for 3 seconds
  And I take screenshot with name "ref-3.x/5-delete-tag-v1"
  And I enter link tag menu
  And I wait for 3 seconds
  And I save the total tags
  And I wait for 1 seconds
  And I take screenshot with name "ref-3.x/6-delete-tag-v1"
  And I clic edit tag
  And I wait for 2 seconds
  And I clic delete tag
  And I wait for 4 seconds
  And I take screenshot with name "ref-3.x/7-delete-tag-v1"
  And I clic confirm delete tag
  And I wait for 4 seconds
  And I take screenshot with name "ref-3.x/8-delete-tag-v1"
  Then Evaluate the tag deleted