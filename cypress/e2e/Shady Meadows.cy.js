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
    cy.get('#rooms > .container > .row > :nth-child(1)').contains('Single');
    cy.get('a.btn.btn-primary').eq(1).click();
    cy.get('.row > :nth-child(1) > .d-flex > span');
    cy.scrollTo('bottom');
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
  
  });

  it('should visit contact section', () => {
    cy.visit('https://automationintesting.online/');
    cy.get(':nth-child(5) > .nav-link').contains('Contact').click();
    cy.get("div[class='col-lg-8']");
    cy.get('.h4.mb-4.text-center').contains('Send Us a Message');
    cy.get('[data-testid="ContactName"]').type('Mustafa Bilal');
    cy.get('[data-testid="ContactEmail"]').type('mustafa7bilal@gmail.com');
    cy.get('[data-testid="ContactPhone"]').type('+923094276016');
    cy.get('[data-testid="ContactSubject"]').type('Automation Testing Practice');
    
    cy.get('[data-testid="ContactDescription"]').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');

cy.get('.d-grid > .btn').contains('Submit').click();
cy.get('.col-lg-8 > .card > .card-body').should('be.visible').contains('Thanks for getting in touch Mustafa Bilal!');





  });
  it('Booking',()=>{
cy.visit('https://automationintesting.online/');
cy.get('#booking');
cy.get('.booking-card').contains('Check Availability & Book Your Stay');
cy.get("input[type='text']").clear();
cy.get('.react-datepicker').should('be.visible');
cy.get('.react-datepicker__day--009').click();
cy.get("input[value='08/06/2025']").clear();
cy.get('.react-datepicker__day--010').click();
cy.get('.col-8 > .btn').contains('Check Availability').click();
cy.get('#rooms').should('be.visible');
cy.get('#rooms > .container > .row > :nth-child(2)').should('be.visible').contains('Double');
cy.get(':nth-child(2) > .card > .card-footer > .btn').contains('Book now').click();
cy.get('.shadow > :nth-child(1)').contains('190').should('be.visible');
cy.get('#doReservation').click();
cy.get('.room-booking-form > .form-control').type('Mustafa');
cy.get(':nth-child(2) > .form-control').type('SQA');
cy.get(':nth-child(3) > .form-control').type('mustafa7bilal@gmail.com');
cy.get(':nth-child(4) > .form-control').type('+923094276016');
cy.get('.btn-primary').click();


})
});









