import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { IdentificationFormGroup } from './profile-form.types';

export const identificationValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const formGroup = control as FormGroup<IdentificationFormGroup>;
  const license = formGroup.controls.license.value;
  const pan = formGroup.controls.pan.value;

  if (!license && !pan) {
    return {
      identificationRequired: 'Either licence or PAN is required',
    };
  }

  return null;
};
