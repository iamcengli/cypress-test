describe('Login Scenario', () => {
  it('Success Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })
})

describe('Failed Login', () => {
  it('Login Failed', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('harry')
    cy.get('#password').type('password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})