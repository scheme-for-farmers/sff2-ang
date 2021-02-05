import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderHeaderComponent } from './bidder-header.component';

describe('BidderHeaderComponent', () => {
  let component: BidderHeaderComponent;
  let fixture: ComponentFixture<BidderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
