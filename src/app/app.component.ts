import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { ButtonComponent } from './components/button/button.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'facenetrpa';
  num : number = .1429483248;
  @ViewChild(ButtonComponent) child !: ButtonComponent;

  text1 ?: string = '';
  print() {
    this.text1 = this.child.printText(); 
  }

  public id : number = 23;

  constructor(public routerService : Router,
    public activatedRoute : ActivatedRoute) {}


  navigation(url : string){
    this.routerService.navigateByUrl(url);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
