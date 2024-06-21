import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBanksComponent } from './card-banks.component';

describe('CardBanksComponent', () => {
  let component: CardBanksComponent;
  let fixture: ComponentFixture<CardBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
