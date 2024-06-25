import { getTitle } from './app.po';

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    getTitle().should('contain.text', 'Todo App');
  });
});
