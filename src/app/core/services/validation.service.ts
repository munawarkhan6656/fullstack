import { Injectable } from '@angular/core';
import { ValidationConfig, ValidationError } from '../../shared/interfaces';
import { FormArray, FormGroup, ValidatorFn, FormControl } from '@angular/forms';

// this is going to be refactored
@Injectable()
export class ValidationService {

  constructor() { }

  getValidatorErrorMessage(label: string, validatorName: string, validatorValue?: any) {
    const config: ValidationConfig = {
      // required: ((label !== '') ? label + ' is required' : 'Field is required'),
      whiteSpace: 'White spaces not allowed',
      email: ((label !== '') ? label + ' Format is incorrect' : 'Format is incorrect'),
      maxlength: `${label} must not exceed ${validatorValue.requiredLength} characters`,
      minlength: `${label} must be at least  ${validatorValue.requiredLength} characters`,
      invalidAlphabet: 'Enter only alphabet character in ' + label,
      invalidNumber: 'Enter only numbers in ' + label,
      invalidField: 'Invalid ' + label,
      appValidateEqual: 'Password does not match',
      invalidEmailAddress: 'Enter valid email address',
      invalidPassword: `Password must be atleast 8 character long and should have one uppercase,
                          one lowercase, one special character & a number`,
    };
    return config[validatorName];
  }

  validateForm(form) {
    for (const name in form.controls) {
      if (form.controls[name] instanceof FormArray) {
        form.controls[name].controls.forEach((formGroup: FormGroup) => {
          this.validateForm(formGroup);
        });
        this.validateForm(form.controls[name]);
      } else if (form.controls[name] instanceof FormGroup) {
        this.validateForm(form.controls[name]);
      } else if (form.controls[name] && form.controls[name].enabled) {
        form.controls[name].updateValueAndValidity({ emitEvent: false });
        form.controls[name].markAsTouched();
      }
    }
    return form.valid;
  }

  resetForm(form) {
    for (const name of form.controls) {
      form.controls[name].setValue('');
      form.controls[name].setErrors(null);
    }
  }

  hasWhiteSpace(control): ValidationError {
    if (/^\s*$/.test(control.value) === false) {
      return null;
    }
    return { required: true };
  }

  containsWhiteSpace(control): ValidationError {
    return /^\s+$/.test(control.value) ? { whiteSpace: true } : null;
  }

  allowAlphabet(control): ValidationError {
    if (/^[A-Za-z\s]+$/.test(control.value)) {
      return null;
    }
    return { invalidAlphabet: true };
  }

  allowNumeric(control): ValidationError {
    if (/^\d+$/.test(control.value)) {
      return null;
    }
    return { invalidNumber: true };
  }

  allowNullOrNumeric(control): ValidationError {
    if (!control.value || /^\d+$/.test(control.value)) {
      return null;
    }
    return { invalidNumber: true };
  }

  allowDecimal(control): ValidationError {
    if (/^\d+(\.\d*)?$/.test(control.value)) {
      return null;
    }
    return { invalidField: true };
  }

  allowMaximumGrossWeight(control): ValidationError {
    if (control.value > 999999999.9999) {
      return { invalidField: true };
    }
    return null;
  }

  confirmPasswordValidation(appValidateEqual: string, isReverse: boolean): ValidatorFn {
    return (formControl: FormControl): { [key: string]: any } | null => {
      const currentVal = formControl.value;
      const passwordControl = formControl.root.get(appValidateEqual);
      if (passwordControl && currentVal !== passwordControl.value && !isReverse) {
        return {
          appValidateEqual: true
        };
      }

      if (passwordControl && currentVal === passwordControl.value && isReverse) {
        if (passwordControl.errors) {
          const appValidateEqualConst = 'appValidateEqual'
          delete passwordControl.errors[appValidateEqualConst];
          if (!Object.keys(passwordControl.errors).length) {
            passwordControl.setErrors(null);
          }
        }
      }

      if (passwordControl && currentVal !== passwordControl.value && isReverse) {
        passwordControl.setErrors({ appValidateEqual: true }, { emitEvent: true });
      }
      return null;
    };
  }

  isBlank(value) {
    return (typeof value === 'undefined' || !value) ? true : false;
  }

  isString(value) {
    return (typeof value === 'string') ? true : false;
  }

  emailValidator = (control) => {
    // RFC 2822 compliant regex
    if (control.hasError('required') ||
      (this.isBlank(control.value) || (this.isString(control.value) && control.value.trim() === ''))) {
      return null;
    }
    if (control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { /* tslint:disable */
      return null;
    }
    return { 'invalidEmailAddress': true };

  }

  passwordValidator = (control) => {
    // RFC 2822 compliant regex
    if (control.hasError('required') ||
      (this.isBlank(control.value) || (this.isString(control.value) && control.value.trim() === ''))) {
      return null;
    }
    if (control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$^*.\[\]{}\(\)\?\-\"!@#%&,><\':;\|_~`\/\\])(?=.{8,})/)) { /* tslint:disable */
      return null;
    }
    return { 'invalidPassword': true };
  }
}
