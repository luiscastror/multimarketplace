import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntrepreneurComponent } from './card-entrepreneur.component';

describe('CardEntrepreneurComponent', () => {
  let component: CardEntrepreneurComponent;
  let fixture: ComponentFixture<CardEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEntrepreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
