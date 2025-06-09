/// <reference types="cypress" />
import Shady from "../PageObjects/Shady";

Cypress.on('uncaught:exception', () => false);

describe('Shady POM Test Suite', () => {
  const shady = new Shady(); 

  it('Performs full reservation flow', () => {
    shady.visit();
    shady.doreservation();
    shady.contactform();
    shady.bookingroom();
  });
});
