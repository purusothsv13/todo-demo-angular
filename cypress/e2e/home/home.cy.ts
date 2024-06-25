import { getProfileComponent } from '../app.po';
import { getProfileLink } from './home.po';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load user profile', () => {
    getProfileLink().click();

    cy.url().should('contain', '/home/profile-form');
    getProfileComponent().should('exist');
  });
});
