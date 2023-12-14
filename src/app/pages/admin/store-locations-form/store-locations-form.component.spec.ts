import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLocationsFormComponent } from './store-locations-form.component';

describe('StoreLocationsFormComponent', () => {
  let component: StoreLocationsFormComponent;
  let fixture: ComponentFixture<StoreLocationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLocationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLocationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
