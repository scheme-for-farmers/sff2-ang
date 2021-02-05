import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderwelcomeComponent } from './bidderwelcome.component';

describe('BidderwelcomeComponent', () => {
  let component: BidderwelcomeComponent;
  let fixture: ComponentFixture<BidderwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderwelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
