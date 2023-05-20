Feature: Delete Tag

@user1 @web
Scenario: Creación de post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email v5 "<USERNAME>"
  And I wait for 1 seconds
  And I enter password v5 "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-delete-tag-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-delete-tag-v2"
  And I enter link tag menu v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-delete-tag-v2"
  And I enter new tag
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/4-delete-tag-v2"
  And I enter name tag "Tag de prueba"
  And I wait for 1 seconds
  And I enter color tag "FF4000"
  And I wait for 2 seconds
  And I enter slug tag "first-tag"
  And I wait for 1 seconds
  And I enter description tag "This is a description for my new tag"
  And I wait for 1 seconds
  And I click save tag
  And I wait for 3 seconds
  And I take screenshot with name "test-5.x/5-delete-tag-v2"
  And I enter link tag menu v5
  And I wait for 3 seconds
  And I save the total tags
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/6-delete-tag-v2"
  And I clic edit tag
  And I wait for 2 seconds
  And I clic delete tag
  And I wait for 4 seconds
  And I take screenshot with name "test-5.x/7-delete-tag-v2"
  And I clic confirm delete tag
  And I wait for 4 seconds
  And I take screenshot with name "test-5.x/8-delete-tag-v2"
  Then Evaluate the tag deleted
