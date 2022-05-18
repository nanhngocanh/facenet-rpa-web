import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkRightComponent } from './our-work-right.component';

describe('OurWorkRightComponent', () => {
  let component: OurWorkRightComponent;
  let fixture: ComponentFixture<OurWorkRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorkRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
