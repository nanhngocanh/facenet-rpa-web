import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkLeftComponent } from './our-work-left.component';

describe('OurWorkLeftComponent', () => {
  let component: OurWorkLeftComponent;
  let fixture: ComponentFixture<OurWorkLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorkLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
