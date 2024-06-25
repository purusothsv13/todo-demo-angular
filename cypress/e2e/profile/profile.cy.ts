import { getProfileComponent } from '../app.po';
import {
  getAddPhoneButton,
  getPhoneControl,
  getProfileFormControl,
  getProfileMsg,
  getProfileSubmitBtn,
} from './profile.po';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/home/profile-form');
    getProfileComponent().should('exist');
  });

  it('should update user profile', () => {
    getProfileFormControl('email').type('abc@gmail.com');
    getProfileFormControl('street').type('Elms Street');
    getProfileFormControl('city').type('Atlantic City');
    getProfileFormControl('pincode').type('123456');
    getProfileFormControl('license').type('DR201212546982');
    getPhoneControl(0).type('9876541230');
    getAddPhoneButton(0).click();
    getPhoneControl(1).type('1123456789');

    getProfileSubmitBtn().click();

    getProfileMsg().should('exist');

    getProfileMsg().should('contain.text', 'Profile updated successfully');
  });
});
