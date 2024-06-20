import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface ProfileForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  address: FormGroup<AddressFormGroup>;
  identitification: FormGroup<IdentificationFormGroup>;
  phoneNumbers: FormArray<FormControl<number | null>>;
}

export interface AddressFormGroup {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  pincode: FormControl<number | null>;
}

export interface IdentificationFormGroup {
  license: FormControl<string | null>;
  pan: FormControl<string | null>;
}
