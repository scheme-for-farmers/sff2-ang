import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyforpolicyComponent } from './applyforpolicy.component';

describe('ApplyforpolicyComponent', () => {
  let component: ApplyforpolicyComponent;
  let fixture: ComponentFixture<ApplyforpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyforpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyforpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
