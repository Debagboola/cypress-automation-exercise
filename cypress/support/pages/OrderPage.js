class OrderPage {
    addComment(comment) {
      cy.get('textarea[name="comment"]').type(comment);
    }
    placeOrder() {
      cy.get('button[data-qa="place-order"]').click();
    }
    fillCardDetails({ name, number, cvc, month, year }) {
      cy.get('input[name="name_on_card"]').type(name);
      cy.get('input[name="card_number"]').type(number);
      cy.get('input[name="cvc"]').type(cvc);
      cy.get('input[name="expiry_month"]').type(month);
      cy.get('input[name="expiry_year"]').type(year);
      cy.get('button[data-qa="pay-and-confirm-order"]').click();
    }
    confirmOrder() {
      cy.contains('Order Placed!').should('be.visible');
    }
  }
  
  export default OrderPage;
  