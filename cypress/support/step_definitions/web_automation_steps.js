import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';
import OrderPage from '../pages/OrderPage';

const signInPage = new SignInPage();
const homePage = new HomePage();
const orderPage = new OrderPage();

Given('I visit the automation exercise website', () => {
  cy.visit('/');
});

When('I sign in with valid credentials', () => {
  signInPage.visit();
  signInPage.fillEmail('qat@mailinator.com');
  signInPage.fillPassword('123456');
  signInPage.submit();
});

Then('I fetch and sort featured items by price', () => {
  homePage.getFeaturedItems().then(($items) => {
    const items = $items.map((i, el) => {
      const label = Cypress.$(el).find('.product-name').text();
      const price = parseFloat(Cypress.$(el).find('.product-price').text().replace('$', ''));
      return { label, price };
    }).get();
    const sortedItems = items.sort((a, b) => a.price - b.price);
    console.log(sortedItems);
  });
});

When('I add two specific items to the cart', () => {
  homePage.clickOnWomenTops();
  homePage.addToCart('Fancy Green Top');
  cy.contains('Continue Shopping').click();
  homePage.addToCart('Summer White Top');
  homePage.viewCart();
});

When('I place an order with given card details', () => {
  homePage.proceedToCheckout();
  orderPage.addComment('Order placed.');
  orderPage.placeOrder();
  orderPage.fillCardDetails({
    name: 'Test Card',
    number: '4100 0000 0000',
    cvc: '123',
    month: '01',
    year: '1900'
  });
});

Then('I confirm the order has been placed', () => {
  orderPage.confirmOrder();
});
