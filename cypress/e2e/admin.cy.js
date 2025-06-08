/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});




describe('Admin',()=>{
it('Ad room from admin and then book',()=>{
cy.visitHomePage();
cy.get(':nth-child(6) > .nav-link').contains('Admin').click();
cy.get('.col-sm-8').should('be.visible');
cy.get('#username').type('admin');
cy.get('#password').type('password');
cy.get('#doLogin').click();
cy.get('[data-testid="roomName"]').type('104');
cy.get('#type').select('Family');
cy.get('#accessible').select('true');
cy.get('#roomPrice').type('200');
cy.get('#wifiCheckbox').check();
cy.get('#tvCheckbox').check();
cy.get('#viewsCheckbox').check();
cy.get('#createRoom').should('be.visible').contains('Create').click();
cy.get('.container > :nth-child(1)').should('be.visible');
cy.get(':nth-child(6) > [data-testid="roomlisting"] > :nth-child(1)').contains('104').click();
cy.get('#root-container > :nth-child(1)').should('be.visible');
cy.get(':nth-child(4) > .nav-link').find('.badge').and('contain.text', '2'); 
cy.get('.col-sm-2 > .btn').click();
cy.get('#description').type('This is for a family of 6 persons with 3 bedrooms');

cy.get('#image').clear().type('https://images.pexels.com/photos/2282848/pexels-photo-2282848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
cy.get('#update').click();
cy.get('.mr-auto > :nth-child(1) > .nav-link').click();
cy.get(':nth-child(2) > .btn').click();
cy.get('#rooms');
cy.get('#rooms > .container > .row > :nth-child(3)');
cy.get(':nth-child(3) > .card > .card-footer > .btn').click();
cy.get('#doReservation').click();

cy.get('.room-booking-form > .form-control').type('Mufa');
cy.get(':nth-child(2) > .form-control').type('Bilal');
cy.get(':nth-child(3) > .form-control').type('mufa@yopmai.com');
cy.get(':nth-child(4) > .form-control').type('+92330690298');
cy.get('.btn-primary').click();
// cy.get(':nth-child(1) > .col-lg-4 > .card > .card-body').should('be.visible');
cy.intercept('GET', '/api/bookings').as('getBookings');
cy.visit('/yourpage');
cy.wait('@getBookings');

cy.get(':nth-child(1) > .col-lg-4 > .card > .card-body')
  .should('be.visible');




})


});
