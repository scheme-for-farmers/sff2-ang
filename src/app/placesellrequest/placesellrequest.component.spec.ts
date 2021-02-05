import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesellrequestComponent } from './placesellrequest.component';

describe('PlacesellrequestComponent', () => {
  let component: PlacesellrequestComponent;
  let fixture: ComponentFixture<PlacesellrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesellrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesellrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
