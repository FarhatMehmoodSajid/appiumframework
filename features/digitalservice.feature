Feature: Digital Services in MyTelenor App

  Scenario: Navigate to Digital Services and activate a specific service
    When I open the hamburger menu
    And I navigate to Digital Services
    And I open all services
    And I select Music & Video
    And I open the service details for SmartTunes
    And I should be able to activate the service
    And I should confirm service activation
    Then Success screen should display
