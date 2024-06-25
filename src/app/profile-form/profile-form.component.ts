import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProfileForm } from './profile-form.types';
import { identificationValidator } from './profile-form.validators';
import { first } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent {
  profileUpdated = false;
  profileForm = new FormGroup<ProfileForm>({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      pincode: new FormControl<number | null>(null, [
        Validators.required,
        Validators.maxLength(6),
      ]),
    }),
    identitification: new FormGroup(
      {
        license: new FormControl(''),
        pan: new FormControl(''),
      },
      [identificationValidator]
    ),
    phoneNumbers: new FormArray([
      new FormControl<number | null>(null, Validators.maxLength(10)),
    ]),
  });

  profileForm1: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.profileForm1 = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
    });
  }

  ngOnInit() {
    this.profileForm.controls.firstName.disable();
    this.profileForm.controls.lastName.disable();

    this.profileForm.statusChanges.subscribe((value) => {
      // console.log(value);
    });

    this.profileForm.valueChanges.subscribe((value) => {
      // console.log(this.profileForm.get);
    });

    this.profileForm.controls.firstName.valueChanges.subscribe((value) => {
      // console.log(value);
    });

    this.profileForm.patchValue(
      {
        firstName: 'fName',
        lastName: 'lName',
      },
      { emitEvent: false }
    );
  }

  onSubmit() {
    if (!this.profileForm.valid) {
      return;
    }

    this.profileUpdated = true;
  }

  addPhoneNumber() {
    this.phoneNumbersFormArray.push(
      new FormControl(null, Validators.maxLength(10))
    );
  }

  get phoneNumberControls() {
    return this.phoneNumbersFormArray.controls;
  }

  get phoneNumbersFormArray() {
    return this.profileForm.controls.phoneNumbers;
  }

  get identificationFormGroup(): FormGroup {
    return this.profileForm.controls.identitification;
  }

  get addressFormGroup(): FormGroup {
    return this.profileForm.controls.address;
  }

  get emailControl() {
    return this.profileForm.controls.email;
  }
}

export interface Type1 {
  name: string;
  age: number;
  email: string;
  contact?: string;
}
