import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facenetrpa';
  member : any[] = [
    {
      name : 'a',
      age: 8
    },
    {
      name : 'b',
      age: 9
    },
    {
      name : 'c',
      age: 10
    },

  ];

linh : any = {
  'color' : true,
  'size' : true
}

}
