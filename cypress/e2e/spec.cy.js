describe('Test  specification', () => {
  it('Validate that an order can be completed', () => {

    //login page
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //product list page: 
    //add 2 products to cart
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();

    //cart page
    cy.get('[data-test=shopping-cart-link]').click();
    cy.get('[data-test=checkout]').click();
    
    //user data page
    cy.get('#first-name').type('Test');
    cy.get('#last-name').type('Tester');
    cy.get('#postal-code').type('12345');
    cy.get('form').click();

    //result page
    cy.get('[data-test=continue]').click();
    cy.get('[data-test=finish]').click();
    cy.screenshot()
  })
})