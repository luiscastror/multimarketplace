import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPasswordEditComponent } from './admin-password-edit.component';

describe('AdminPasswordEditComponent', () => {
  let component: AdminPasswordEditComponent;
  let fixture: ComponentFixture<AdminPasswordEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPasswordEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPasswordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
