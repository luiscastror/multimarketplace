import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemsFormComponent } from './store-items-form.component';

describe('StoreItemsFormComponent', () => {
  let component: StoreItemsFormComponent;
  let fixture: ComponentFixture<StoreItemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
