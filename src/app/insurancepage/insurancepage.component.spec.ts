import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepageComponent } from './insurancepage.component';

describe('InsurancepageComponent', () => {
  let component: InsurancepageComponent;
  let fixture: ComponentFixture<InsurancepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
