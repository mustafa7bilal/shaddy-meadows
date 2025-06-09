/// <reference types="cypress" />

import AdminPageClass from "../PageObjects/AdminPage";
import HomePageClass from "../PageObjects/HomePage";

const AdminPage = new AdminPageClass();
const HomePage = new HomePageClass();

Cypress.on('uncaught:exception', () => false);

describe('Add room from admin and book it', () => {
  it('should create, edit, and book a room', () => {
    cy.fixture("Bookingdetails").then((data) => {
      const {
        firstName,
        lastName,
        email,
        phone,
        subject,
        name,
        type,
        accessible,
        price,
        wifi,
        tv,
        views,
        description,
        imageUrl
      } = data;

      const room = { name, type, accessible, price, wifi, tv, views, description, imageUrl };
      const booking = { firstName, lastName, email, phone, subject };

      HomePage.visit();
      HomePage.gotoAdmin();
      AdminPage.login('admin', 'password');
      AdminPage.createRoom(room);
      AdminPage.editRoom(room);
      AdminPage.bookRoom(booking);
    });
  });
});
