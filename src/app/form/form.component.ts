import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckAgeServiceService } from './check-age-service.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  x : Observable<any> = new Observable();
  ex: any = {
    a: [1,2,3],
  }

  user: any = {
    email: '',
    password: ''
  }

  checkAge(control: AbstractControl): ValidationErrors | null{
    const check = control.value;    
    if(isNaN(check)) {
      return { 'check': true, 'requiredValue': 10 }
    }

    if(check <= 10) {
      return { 'check': true, 'requiredValue': 10 }
    }

    return null;
  }

  studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    age: new FormControl('', [this.checkAge]),
    address: new FormControl(),
  });

  // get age(){
  //   return this.studentForm.get('age');
  // }

  
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.studentForm.value);
    
  }
}
