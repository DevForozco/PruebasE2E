Feature: Delete Tag

@user1 @web
Scenario: Creación de post
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "j.vivast@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password "Duitama0420*"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  And I enter link tag menu
  And I wait for 2 seconds
  And I enter new tag
  And I wait for 2 seconds
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
  And I enter link tag menu
  And I wait for 5 seconds
  And I clic edit tag