import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-post',
  templateUrl: './thumbnail-post.component.html',
  styleUrls: ['./thumbnail-post.component.css']
})
export class ThumbnailPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() thumbnail_post ?: any;


}
