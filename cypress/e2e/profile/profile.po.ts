export const getProfileFormControl = (formControlName: string) => {
  return cy.get(
    `[data-testid="profile-form"] input[formControlName="${formControlName}"]`
  );
};

export const getPhoneControl = (controlIndex: number) => {
  return cy
    .get(`[data-testid="profile-form"] [formArrayName="phoneNumbers"] input`)
    .eq(controlIndex);
};

export const getAddPhoneButton = (controlIndex: number) => {
  return cy
    .get(
      `[data-testid="profile-form"] [formArrayName="phoneNumbers"] [data-testid="add-phone-btn"]`
    )
    .eq(controlIndex);
};

export const getProfileSubmitBtn = () => {
  return cy.get('[data-testid="profile-submit"');
};

export const getProfileMsg = () => {
  return cy.get('[data-testid="profile-msg"');
};
