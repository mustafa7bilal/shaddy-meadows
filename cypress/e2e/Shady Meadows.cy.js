/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Shady Meadows', () => {
  it('should visit shady meadows and do reservation', () => {
    cy.visit('https://automationintesting.online/');
    cy.url().should('include', 'automationintesting.online');
    cy.get('.navbar-brand > span').should('be.visible').contains('Meadows');
    cy.get(':nth-child(1) > .nav-link').contains('Rooms').should('be.visible').click();
    cy.get('#rooms .row.g-4').children().should('be.visible', 'have.length',3);
    cy.get('#rooms > .container > .row > :nth-child(1)').contains('Single')
    cy.get('a.btn.btn-primary').eq(1).click();
    cy.get('.row > :nth-child(1) > .d-flex > span');
    
    cy.scrollTo('bottom')
    cy.get('.bg-light.py-5 > .container > .row').should('be.visible');
    cy.scrollTo('top');
    cy.get('.shadow > :nth-child(1)').should('be.visible');
    cy.get('.rbc-btn-group').should('be.visible');
    cy.contains('button', 'Next').click().click().click().click();
    cy.get('.rbc-calendar .rbc-month-view');
    cy.get('.rbc-month-header').should('be.visible');
    cy.get('.rbc-header').contains('Mon').click();
    cy.get('.rbc-row-bg').should('be.visible');
    cy.get('.rbc-day-bg').should('be.visible');
    cy.get('.rbc-row-content').should('be.visible').contains('13').click();
    cy.get('#doReservation').should('be.visible').contains('Reserve Now').click();
    cy.scrollTo('top');
    cy.get('.col-lg-4 .card-body').should('be.visible').contains('Book This Room');
    cy.get('.room-firstname').type('Mustafa');
    cy.get('.room-lastname').type('Bilal');
    cy.get('.room-email').type('mustafa7bilal@gmail.com');
    cy.get('.room-phone').type('+923094276016');
    cy.get('.d-flex.justify-content-between.fw-bold').contains('£140');
cy.get('button.btn.btn-primary.w-100.mb-3').contains('Reserve Now').click();
   cy.get('button.btn.btn-primary.w-100.mb-3').contains('Reserve Now').click();
   cy.get(':nth-child(1) > .col-lg-4 > .card > .card-body').should('be.visible');
});

  





   

  });
  
