import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() content ?: string;

  constructor() { }

  text ?: string;
  printText(){
    return this.text = 'sdjsdjsdsd';
  }

  ngOnInit(): void {
  }

}
