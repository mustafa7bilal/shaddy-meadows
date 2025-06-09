/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Shady Meadows', () => {
  it('should visit shady meadows and do reservation', () => {
    cy.visitHomePage();
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
    cy.fixture('Bookingdetails').then((data)=>{

cy.get('.room-firstname').type(data.firstName);
 cy.get('.room-lastname').type(data.lastName);
   cy.get('.room-email').type(data.email);

    cy.get('.room-phone').type(data.phone);

        }

    )
    
   
  
    cy.get('.d-flex.justify-content-between.fw-bold').contains('£140');
    cy.get('button.btn.btn-primary.w-100.mb-3').contains('Reserve Now').click();
  
  });

  it('should visit contact section', () => {
    cy.visitHomePage();
    cy.fixture("Bookingdetails").then((data)=>{
 cy.get('[data-testid="ContactName"]').type(data.firstName);
    cy.get('[data-testid="ContactEmail"]').type(data.email);
    cy.get('[data-testid="ContactPhone"]').type(data.phone);
    cy.get('[data-testid="ContactSubject"]').type(data.subject);


    }

    )
    cy.get(':nth-child(5) > .nav-link').contains('Contact').click();
    cy.get("div[class='col-lg-8']");
    cy.get('.h4.mb-4.text-center').contains('Send Us a Message');
   
    
    cy.get('[data-testid="ContactDescription"]').type('Lorem Ipsum is sjjhghjfbghgjhgrhg gjbgjfbgg gbbgjbfhge');

cy.get('.d-grid > .btn').contains('Submit').click();
cy.get('.col-lg-8 > .card > .card-body').should('be.visible').contains("Thanks");
cy.wait(5000);




  });
  it('Booking',()=>{
cy.visitHomePage();
cy.get('#booking');
cy.get('.container > .card > .card-body').contains('Check Availability & Book Your Stay');

cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').clear();
cy.get('.react-datepicker__month-container').should('be.visible');
cy.get('.react-datepicker__day--010').click();
cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').clear();
cy.get('.react-datepicker__month-container').should('be.visible');
cy.get('.react-datepicker__day--012').click();
cy.get('.col-8 > .btn').contains('Check Availability').click();


cy.get('#rooms').should('be.visible');
cy.get('#rooms > .container > .row > :nth-child(2)').should('be.visible').contains('Double');
cy.get(':nth-child(2) > .card > .card-footer > .btn').contains('Book now').click();
cy.get('.shadow > :nth-child(1)').contains('340').should('be.visible');
cy.get('#doReservation').click();
cy.fixture("Bookingdetails").then((data)=>{
cy.get('.room-booking-form > .form-control').type(data.firstName);
cy.get(':nth-child(2) > .form-control').type(data.type);
cy.get(':nth-child(3) > .form-control').type(data.email);
cy.get(':nth-child(4) > .form-control').type(data.phone);
  
}

)

cy.get('.btn-primary').click();


})
});









