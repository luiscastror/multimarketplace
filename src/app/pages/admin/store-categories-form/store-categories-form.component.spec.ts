import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoriesFormComponent } from './store-categories-form.component';

describe('StoreCategoriesFormComponent', () => {
  let component: StoreCategoriesFormComponent;
  let fixture: ComponentFixture<StoreCategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCategoriesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
