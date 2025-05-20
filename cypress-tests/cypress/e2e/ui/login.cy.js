import login from "../../fixtures/json/login.json"

describe('Login Tests', () => {
  it('Login successfully with valid credentials', () => {
    cy.visit(login.baseURL)
    //enter valid credentials
    cy.get('[data-test="username"]').type(login.valid_username)
    cy.get('[data-test="password"]').type(login.valid_password)
    //click on login button
    cy.get('[data-test="login-button"]').click()
    //check url 
    cy.url().should('include', '/inventory.html')
  })
  it('Show error for invalid credentials', () => {
    cy.visit(login.baseURL)
    //enter invalid credentials
    cy.get('[data-test="username"]').type(login.invalid_username)
    cy.get('[data-test="password"]').type(login.invalid_password)
    //click on login button
    cy.get('[data-test="login-button"]').click()
    //check error message
    cy.get('[data-test="error"]').should('contain', login.error)
  })
  it('Mask the password input', () => {
    cy.visit(login.baseURL)
    //check attribute of the "password" input field
    cy.get('[data-test="password"]').should('have.attr', 'type', 'password')
  })
})