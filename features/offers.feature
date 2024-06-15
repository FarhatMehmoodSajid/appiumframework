Feature: MyTelenor App Offers

  Scenario: Navigate to offers and activate an offer
    When I navigate to the offers screen
    And I should select the tab
    And I should activate the offer
    And I should confirm the offer
    Then I should show success screen
