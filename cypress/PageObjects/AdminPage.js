class AdminPage {
  login(username, password) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#doLogin').click();
  }

  createRoom(room) {
    cy.get('[data-testid="roomName"]').type(room.name);
    cy.get('#type').select(room.type);
    cy.get('#accessible').select(String(room.accessible));
    cy.get('#roomPrice').type(room.price);
    if (room.wifi) cy.get('#wifiCheckbox').check();
    if (room.tv) cy.get('#tvCheckbox').check();
    if (room.views) cy.get('#viewsCheckbox').check();
    cy.get('#createRoom').should('be.visible').contains('Create').click();
    cy.get('.container > :nth-child(1)').should('be.visible');
  }

  editRoom(room) {
  cy.get(':nth-child(5) > [data-testid="roomlisting"] > :nth-child(1)')
      .contains(room.name).click();
    cy.get('#root-container > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-2 > .btn').click();
    cy.get('#description').type(room.description);
    cy.get('#image').clear().type(room.imageUrl);
    cy.get('#update').click();
    cy.get('.mr-auto > :nth-child(1) > .nav-link').click();
    cy.get(':nth-child(2) > .btn').click();
  }

  bookRoom(booking) {
    cy.get('#rooms > .container > .row > :nth-child(3)');
    cy.get(':nth-child(3) > .card > .card-footer > .btn').click();
    cy.get('#doReservation').click();

    cy.get('.room-booking-form > .form-control').type(booking.firstName);
    cy.get(':nth-child(2) > .form-control').type(booking.lastName);
    cy.get(':nth-child(3) > .form-control').type(booking.email);
    cy.get(':nth-child(4) > .form-control').type(booking.phone);
    cy.get('.btn-primary').click();

    cy.get(':nth-child(1) > .col-lg-4 > .card > .card-body').should('be.visible');
  }
}

export default AdminPage;
