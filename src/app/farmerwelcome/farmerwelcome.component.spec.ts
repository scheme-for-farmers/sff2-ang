import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerwelcomeComponent } from './farmerwelcome.component';

describe('FarmerwelcomeComponent', () => {
  let component: FarmerwelcomeComponent;
  let fixture: ComponentFixture<FarmerwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerwelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
