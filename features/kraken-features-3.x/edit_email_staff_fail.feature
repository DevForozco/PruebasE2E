Feature: Edit email staff failure

@user1 @web
Scenario: Creación de post
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/1-edit-email-staff-failure-v1"
  And I click login
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/2-edit-email-staff-failure-v1"
  And I enter link staff menu
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/3-edit-email-staff-failure-v1"
  And I clic edit owner
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/4-edit-email-staff-failure-v1"
  And I enter email owner " "
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/5-edit-email-staff-failure-v1"
  And I save edit owner
  And I wait for 2 seconds
  And I take screenshot with name "ref-3.x/6-edit-email-staff-failure-v1"
  Then I validate error button save
