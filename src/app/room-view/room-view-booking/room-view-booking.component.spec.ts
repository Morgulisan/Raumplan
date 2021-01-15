import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomViewBookingComponent } from './room-view-booking.component';

describe('RoomViewBookingComponent', () => {
  let component: RoomViewBookingComponent;
  let fixture: ComponentFixture<RoomViewBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomViewBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
