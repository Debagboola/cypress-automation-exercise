# Web Automation Exercise
This is an automation exercise to showcase my knowledge of CYPRESS, CUCUMBER, POM, BDD and Typescript

## Tasks
* Design a clean UI automation solution in Typescript for this application: [Automation Exercise Test Page](https://www.automationexercise.com)
* Use CYPRESS automation tool and adopt CUCUMBER, POM and BDD framework.

## Definition of Done
* Test should run and pass in Chrome browser and Firefox. 
* Platform independent. (It should run on windows, mac or linux) 
* Better page layer management. 
* Helper methods for page interactions like click, should, then. 
* Readable and clean code. 
* Clear instructions about the framework and how to execute in the readme file. 
* Commits history to see how you have approached the problem. 
* Following good design principles. 

## Test Data
| Environment Url | Email Address | Password |
|-----------------|-----------------|-----------------|
| [https://www.automationexercise.com](https://www.automationexercise.com)    | qat@mailinator.com     | 123456     |

## Test Suite
| Test Case | Test Scenarios | Test Steps | Expected Result | Actual Result | 
|-----------------|-----------------|-----------------|-----------------|-----------------|
| Access Web Page    | Confirm that user can successfully access the web page | Go to "https://www.automationexercise.com/"   | okay    | pass |
| Sign In    | Confirm that a valid user can successfully sign in to the portal     |1. Go to "https://www.automationexercise.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: qat@mailinator.com Password: 123456  | okay    | pass |
| Sign In    | Confirm that an invalid user cannot successfully sign in to the portal     |1. Go to "https://www.automationexercise.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: qata@mailinator.com Password: 456  | okay    | pass |
| Sign In    | Confirm that a user cannot successfully sign in to the portal by submitting without inputing any data   |1. Go to "https://www.automationexercise.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: Password: | okay    | pass |
| Access Landing Page after sign in     | Confirm that user is rerouted to landing page after successful sign in    | sign in successfully    | okay     | pass  |
| Fetch and sort featured items   | Fetch and sort featured items in ascending order per their price (low to high)   | On landing page, under FEATURED ITEMS we see a list of apparels. Get the label and associated price of those items. Fetch them and sort it as per their price [Low to High] and print it on Console [Label & Price] | okay     | pass  |
| Print the sorted featured items on Console | Print the sorted featured items on Console [Label & Price]    | Successfully Print the sorted featured items on Console [Label & Price] | okay     | pass  |
| Add Item to cart | Confirm that user can successfully add Item to cart  | Scroll Up - Navigate to Women >> Dress >> Women – Tops Products. Select the Fancy Green Top and add to cart. Select Summer White Top and add to cart as well.| okay     | pass  |
| Successfully pay for an item | Confirm that user can successfully checkout on an item | View cart >> Proceed to checkout. Add the comments, ”Order placed.” Click on Place Order. Enter card details [Test Card, 4100 0000 0000, 123, 01/1900] | okay     | pass  |
| Confirm order has been placed | Confirm that after successful payment of the item, the order is placed | make payment. then check for a confirmation popup or email | okay   | pass  |

