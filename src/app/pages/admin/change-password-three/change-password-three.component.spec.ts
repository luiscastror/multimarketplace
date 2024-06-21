import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordThreeComponent } from './change-password-three.component';

describe('ChangePasswordThreeComponent', () => {
  let component: ChangePasswordThreeComponent;
  let fixture: ComponentFixture<ChangePasswordThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
