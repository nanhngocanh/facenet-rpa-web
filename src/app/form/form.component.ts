import { Component, OnInit } from '@angular/core';
import { SignUpForm } from "./sign-up-form";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new SignUpForm ('ABC', 20, '123456789');
}
