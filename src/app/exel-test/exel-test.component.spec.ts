import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExelTestComponent } from './exel-test.component';

describe('ExelTestComponent', () => {
  let component: ExelTestComponent;
  let fixture: ComponentFixture<ExelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExelTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
