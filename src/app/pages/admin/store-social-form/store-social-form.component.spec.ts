import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSocialFormComponent } from './store-social-form.component';

describe('StoreSocialFormComponent', () => {
  let component: StoreSocialFormComponent;
  let fixture: ComponentFixture<StoreSocialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSocialFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
