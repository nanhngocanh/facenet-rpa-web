import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.css']
})
export class TwitterPostComponent implements OnInit {

  @Input() twitter_post ?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
