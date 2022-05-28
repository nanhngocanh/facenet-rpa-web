import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  items: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://192.168.1.253:8080/limitourwork')
      .subscribe((data) => (this.items = data));
  }
}
