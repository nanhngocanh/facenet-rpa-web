import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css'],
})
export class InsightComponent implements OnInit {
  items: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://192.168.1.253:8080/limitinsights')
      .subscribe((data) => {
        this.items = data;
      });
  }
}
