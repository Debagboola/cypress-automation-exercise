Feature: Web Automation Tasks

Scenario: Complete web automation tasks
  Given I visit the automation exercise website
  When I sign in with valid credentials
  Then I fetch and sort featured items by price
  And I add two specific items to the cart
  And I place an order with given card details
  Then I confirm the order has been placed