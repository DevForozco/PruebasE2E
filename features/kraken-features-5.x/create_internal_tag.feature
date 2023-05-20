Feature: Create internal New Tag

@user1 @web
Scenario: Creación de post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email v5 "<USERNAME>"
  And I wait for 1 seconds
  And I enter password v5 "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/1-create-internal-tag-v2"
  And I click login v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/2-create-internal-tag-v2"
  And I enter link tag menu v5
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/3-create-internal-tag-v2"
  And I enter new internal tag
  And I wait for 1 seconds
  And I take screenshot with name "test-5.x/4-create-internal-tag-v2"
  And I enter new tag
  And I wait for 2 seconds
  And I take screenshot with name "test-5.x/5-create-internal-tag-v2"
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
  And I take screenshot with name "test-5.x/6-create-internal-tag-v2"
  And I enter link tag menu v5
  And I wait for 5 seconds
  And I take screenshot with name "test-5.x/7-create-internal-tag-v2"
  Then Evaluate the tag created
