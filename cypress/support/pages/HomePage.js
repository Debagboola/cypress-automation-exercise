class HomePage {
    getFeaturedItems() {
      return cy.get('.features_items .productinfo');
    }
    clickOnWomenTops() {
      cy.contains('Women').click();
      cy.contains('Tops').click();
    }
    addToCart(itemName) {
      cy.contains(itemName).click();
      cy.get('button[data-qa="add-to-cart"]').click();
    }
    viewCart() {
      cy.contains('View Cart').click();
    }
    proceedToCheckout() {
      cy.get('button[data-qa="proceed-to-checkout"]').click();
    }
  }
  
  export default HomePage;
  