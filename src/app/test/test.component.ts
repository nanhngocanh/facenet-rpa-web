import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Test } from './test';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor( public activatedRoute : ActivatedRoute, public routerService : Router ) { }

  public route : string | null = '';

  public id : string = '';

  navigation(url : string){
    this.routerService.navigateByUrl(url);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
