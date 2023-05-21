Feature: Edit Name staff

@user1 @web
Scenario: Creación de post
  Given I navigate to page "<URLLOGIN>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I take screenshot with name "ref-3.x/1-edit-name-staff-v1"
  And I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-name-staff-v1"
  And I enter link staff menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-edit-name-staff-v1"
  And I clic edit owner
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-edit-name-staff-v1"
  And I enter name owner null
  And I wait for 2 seconds
  And I click off page
  And I take screenshot with name "ref-3.x/5-edit-name-staff-v1"
  And I save edit owner
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-name-staff-v1"
  Then Evaluate name staff null error
