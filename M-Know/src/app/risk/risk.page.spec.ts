import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPage } from './risk.page';

describe('RiskPage', () => {
  let component: RiskPage;
  let fixture: ComponentFixture<RiskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
