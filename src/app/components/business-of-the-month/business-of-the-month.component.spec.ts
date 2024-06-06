import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOfTheMonthComponent } from './business-of-the-month.component';

describe('BusinessOfTheMonthComponent', () => {
  let component: BusinessOfTheMonthComponent;
  let fixture: ComponentFixture<BusinessOfTheMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessOfTheMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
