/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});




describe('Admin',()=>{
it('Ad room from admin and then book',()=>{
cy.visit('https://automationintesting.online/');
cy.get(':nth-child(6) > .nav-link').contains('Admin').click();
cy.get('.col-sm-8').should('be.visible');
cy.get('#username').type('admin');
cy.get('#password').type('password');
cy.get('#doLogin').click();



})


});
