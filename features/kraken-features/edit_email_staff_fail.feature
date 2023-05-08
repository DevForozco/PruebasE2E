Feature: Edit emial staff failure

@user1 @web
Scenario: Creación de post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "j.vivast@uniandes.edu.co"
  And I wait for 1 seconds
  And I enter password "Duitama0420*"
  And I wait for 2 seconds
  And I click login
  And I wait for 2 seconds
  And I enter link staff menu
  And I wait for 2 seconds
  And I clic edit owner
  And I wait for 2 seconds
  And I enter email owner " "
  And I wait for 2 seconds
  And I save edit owner
  And I wait for 2 seconds
  Then I validate error button save