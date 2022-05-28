import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.css'],
})
export class FeaturedWorkComponent implements OnInit {
  @Input() item?: any;
  constructor() {}

  ngOnInit(): void {}
}
