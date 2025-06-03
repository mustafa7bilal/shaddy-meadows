/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Shady Meadows', () => {
  it('should visit shady meadows', () => {
    cy.visit('https://automationintesting.online/');
    cy.url().should('include', 'automationintesting.online');
    cy.get('.navbar-brand > span').should('be.visible').contains('Meadows');
    cy.get(':nth-child(1) > .nav-link').contains('Rooms').should('be.visible').click();
    cy.get('#rooms .row.g-4').children().should('be.visible', 'have.length',3);
    cy.get('#rooms > .container > .row > :nth-child(1)').contains('Single')
    cy.get('a.btn.btn-primary').eq(1).click();
  });
});
