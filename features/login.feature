Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I login with valid credentials
    And I should close Rtdm Popup
    Then I should close Home add
    
