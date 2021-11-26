import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValorMaximo]'
})
export class ValorMaximoDirective {

  constructor() { }

}

export function valorMaximoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value > 9999.99;
    return forbidden ? { valorMaximo: { value: control.value } } : null;
  };
}