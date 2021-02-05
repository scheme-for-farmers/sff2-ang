import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmarketplaceComponent } from './viewmarketplace.component';

describe('ViewmarketplaceComponent', () => {
  let component: ViewmarketplaceComponent;
  let fixture: ComponentFixture<ViewmarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
