Feature: Login Functionality

  Scenario: Successful Login

    Given user is on login page
    When user enters valid username and password
    Then user should be redirected to inventory page

  Scenario: Add Product To Cart

    Given user is on login page
    When user enters valid username and password
    And user adds backpack to cart
    And user opens cart
    Then backpack should be visible in cart