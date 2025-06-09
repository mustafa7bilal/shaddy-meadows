class HomePage {
  visit() {
    cy.visit('/');
  }

  gotoAdmin() {
    cy.get(':nth-child(6) > .nav-link').contains('Admin').click();
    cy.get('.col-sm-8').should('be.visible');
  }
}

export default HomePage;
