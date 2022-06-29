import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckAgeServiceService {

  constructor() { }

  checkAge(control: AbstractControl): ValidationErrors | null{
    const check = control.value;
    console.log(check);
    
    if(isNaN(check)) {
      return { 'check': true, 'requiredValue': 10 }
    }

    if(check <= 10) {
      return { 'check': true, 'requiredValue': 10 }
    }

    return null;
    
  }
}
