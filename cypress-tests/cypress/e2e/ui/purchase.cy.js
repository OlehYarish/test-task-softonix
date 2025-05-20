import purchase from "../../fixtures/json/purchase.json"

describe('Complete purchase flow', () => {
  it('Complete a purchase successfully', () => {
    cy.visit(purchase.baseURL)
    //enter valid credentials
    cy.get('[data-test="username"]').type(purchase.valid_username)
    cy.get('[data-test="password"]').type(purchase.valid_password)
    //click on login button
    cy.get('[data-test="login-button"]').click()
    //select item and add to card
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //open shoping card
    cy.get('[data-test="shopping-cart-link"]').click()
    //click on checkout button
    cy.get('[data-test="checkout"]').click()
    //fill all required fields
    cy.get('[data-test="firstName"]').type(purchase.firstName)
    cy.get('[data-test="lastName"]').type(purchase.lastName)
    cy.get('[data-test="postalCode"]').type(purchase.postalCode)
    //click on continue button
    cy.get('[data-test="continue"]').click()
    //click on finish button
    cy.get('[data-test="finish"]').click()
    //check the title and header about success order
    cy.get('[data-test="title"]').should('contain', purchase.checkoutComplete)
    cy.get('[data-test="complete-header"]').should('contain', purchase.completeMessage)
  })
})