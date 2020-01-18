import {
  ValidatorFn,
  ValidationErrors
} from "@angular/forms/src/directives/validators";
import { AbstractControl } from "@angular/forms";

export function invalidTextArrayFormat(format: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value !== "" && !format.test(control.value)
      ? { invalidTextArrayFormat: { value: control.value } }
      : null;
  };
}
