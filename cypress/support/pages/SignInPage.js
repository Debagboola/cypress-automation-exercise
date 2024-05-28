class SignInPage {
    visit() {
      cy.visit('/login');
    }
    fillEmail(value) {
      cy.get('input[data-qa="login-email"]').type(value);
    }
    fillPassword(value) {
      cy.get('input[data-qa="login-password"]').type(value);
    }
    submit() {
      cy.get('button[data-qa="login-button"]').click();
    }
  }
  
  export default SignInPage;
  